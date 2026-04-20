#!/usr/bin/env python3
"""One-off helper: inline MjmlEmailDocument into MJML TSX files (remove lib import)."""

from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

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

LIB_IMPORT_RE = re.compile(
    r'\nimport \{ MjmlEmailDocument \} from "@/lib/mjml-email-document";\n'
)


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


def insert_snippet_after_resolve(content: str) -> str:
    pat = r'(\nimport \{ resolveEmailTheme \} from "@/registry/lib/resolve-theme";)'
    m = re.search(pat, content)
    if not m:
        raise ValueError("resolveEmailTheme import not found")
    end = m.end()
    return content[:end] + SNIPPET + content[end:]


def process(path: Path) -> None:
    text = path.read_text()
    if 'from "@/lib/mjml-email-document"' not in text:
        print(f"skip (no lib import): {path.relative_to(ROOT)}")
        return
    if "interface MjmlEmailDocumentProps" in text:
        print(f"skip (already inlined): {path.relative_to(ROOT)}")
        return
    text = LIB_IMPORT_RE.sub("\n", text)
    text = merge_faire_import(text)
    text = ensure_react_types_after_faire(text)
    text = insert_snippet_after_resolve(text)
    path.write_text(text)
    print(f"ok {path.relative_to(ROOT)}")


def main() -> None:
    paths = [Path(p) for p in sys.argv[1:]]
    if not paths:
        blocks = sorted((ROOT / "registry/bases/mjml-react/blocks").glob("*.tsx"))
        for p in blocks:
            process(p)
        return
    for p in paths:
        process(p.resolve())


if __name__ == "__main__":
    main()
