#!/usr/bin/env python3
"""Inline MjmlEmailDocument into MJML UI components; split *Sections + wrapper."""

from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
UI = ROOT / "registry/bases/mjml-react/ui"
EXAMPLES = ROOT / "examples/mjml-react"

SNIPPET = """
interface MjmlEmailDocumentProps {
  theme: TailwindConfig;
  preview?: string;
  title?: string;
  children: ReactNode;
}

const MjmlEmailDocument = ({
  theme,
  preview,
  title,
  children,
}: MjmlEmailDocumentProps) => {
  const t = resolveEmailTheme(theme);

  const container =
    typeof t.maxWidth.container === "string"
      ? Number.parseInt(String(t.maxWidth.container).replaceAll(/\\D/g, ""), 10)
      : 600;
  const width = Number.isFinite(container) && container > 0 ? container : 600;

  const fg = t.colors.foreground ?? "#111827";
  const bg = t.colors.background ?? "#ffffff";
  const sans = t.fontFamily.sans ?? "sans-serif";
  const baseFs = t.fontSize.base ?? "14px";
  const lh = t.lineHeight.snug ?? "1.375";

  return (
    <Mjml>
      <MjmlHead>
        {(preview ?? title) ? (
          <MjmlPreview>{preview ?? title}</MjmlPreview>
        ) : null}
        <MjmlAttributes>
          <MjmlAll color={fg} fontFamily={sans} />
          <MjmlText fontSize={baseFs} lineHeight={lh} />
        </MjmlAttributes>
      </MjmlHead>
      <MjmlBody backgroundColor={bg} width={width}>
        <MjmlWrapper padding="0">{children}</MjmlWrapper>
      </MjmlBody>
    </Mjml>
  );
};

"""

LIB_IMPORT_RE = re.compile(
    r'\nimport \{ MjmlEmailDocument \} from "@/lib/mjml-email-document";\n'
)

REQUIRED_MJML = {
    "Mjml",
    "MjmlAll",
    "MjmlAttributes",
    "MjmlBody",
    "MjmlHead",
    "MjmlPreview",
    "MjmlText",
    "MjmlWrapper",
}


def merge_faire_import(content: str) -> str:
    m = re.search(
        r'import\s*\{([^}]+)\}\s*from\s*["\']@faire/mjml-react["\'];',
        content,
        re.DOTALL,
    )
    if not m:
        raise ValueError("No @faire/mjml-react import")
    inner = m.group(1)
    names = [x.strip() for x in inner.replace("\n", ",").split(",") if x.strip()]
    name_set = set(names) | REQUIRED_MJML
    ordered = sorted(name_set, key=lambda s: s.lower())
    new_inner = ",\n  ".join(ordered)
    new_import = f'import {{\n  {new_inner},\n}} from "@faire/mjml-react";'
    return content[: m.start()] + new_import + content[m.end() :]


def ensure_react_types_after_faire(content: str) -> str:
    if "import type { ReactNode }" in content:
        return content
    m = re.search(r'from "@faire/mjml-react";\n', content)
    if not m:
        raise ValueError("faire import end not found")
    insert = '\nimport type { ReactNode } from "react";\nimport type { TailwindConfig } from "react-email";\n'
    return content[: m.end()] + insert + content[m.end() :]


# stem -> (export_name, preview_slug)
COMPONENTS: dict[str, tuple[str, str]] = {
    "hero": ("Hero", "hero"),
    "footer": ("Footer", "footer"),
    "divider": ("Divider", "divider"),
    "content-grid": ("ContentGrid", "content-grid"),
    "feature-row": ("FeatureRow", "feature-row"),
    "pricing-table": ("PricingTable", "pricing-table"),
    "cta-banner": ("CTABanner", "cta-banner"),
    "logo-header": ("LogoHeader", "logo-header"),
    "avatar-row": ("AvatarRow", "avatar-row"),
    "product-card": ("ProductCard", "product-card"),
    "social-links": ("SocialLinks", "social-links"),
    "testimonial": ("Testimonial", "testimonial"),
}


def refactor_ui(path: Path) -> None:
    stem = path.stem
    export_name, preview_slug = COMPONENTS[stem]
    text = path.read_text()
    if "interface MjmlEmailDocumentProps" in text:
        print(f"skip ui (already done): {path.name}")
        return

    text = LIB_IMPORT_RE.sub("\n", text)
    text = merge_faire_import(text)
    text = ensure_react_types_after_faire(text)

    m = re.search(r"\n\n(export interface \w+Props)", text)
    if not m:
        raise ValueError(f"No export interface Props in {path}")
    text = text[: m.start()] + SNIPPET + "\n" + m.group(1) + text[m.end() :]

    old = f"export const {export_name} = ("
    new = f"export const {export_name}Sections = ("
    if old not in text:
        raise ValueError(f"Missing `{old}` in {path}")
    text = text.replace(old, new, 1)

    wrapper = f"""
export const {export_name} = (props: {export_name}Props) => (
  <MjmlEmailDocument preview="{preview_slug}" theme={{props.theme ?? defaultTheme}}>
    <{export_name}Sections {{...props}} />
  </MjmlEmailDocument>
);
"""

    prev_re = re.compile(rf"\n({export_name}\.PreviewProps =)")
    if not prev_re.search(text):
        raise ValueError(f"No PreviewProps for {export_name}")
    text = prev_re.sub("\n" + wrapper + r"\n\1", text, count=1)

    path.write_text(text)
    print(f"ui ok {path.name}")


def write_demo(stem: str, export_name: str, preview_slug: str) -> None:
    path = EXAMPLES / f"{stem}-demo.tsx"
    snippet_body = SNIPPET.strip() + "\n"
    content = f"""import {{
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlHead,
  MjmlPreview,
  MjmlText,
  MjmlWrapper,
}} from "@faire/mjml-react";
import type {{ ReactNode }} from "react";
import type {{ TailwindConfig }} from "react-email";

import {{ {export_name}, {export_name}Sections }} from "@/registry/bases/mjml-react/ui/{stem}";
import {{ resolveEmailTheme }} from "@/registry/lib/resolve-theme";
import {{ defaultTheme }} from "@/registry/themes/default";

{snippet_body}
export default function {export_name}Demo() {{
  return (
    <MjmlEmailDocument preview="{preview_slug}" theme={{defaultTheme}}>
      <{export_name}Sections {{...{export_name}.PreviewProps}} />
    </MjmlEmailDocument>
  );
}}
"""
    path.write_text(content)
    print(f"demo ok {path.name}")


def main() -> None:
    for stem, (export_name, preview_slug) in COMPONENTS.items():
        refactor_ui(UI / f"{stem}.tsx")
    for stem, (export_name, preview_slug) in COMPONENTS.items():
        write_demo(stem, export_name, preview_slug)


if __name__ == "__main__":
    main()
