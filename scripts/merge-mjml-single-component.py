#!/usr/bin/env python3
"""
Collapse MjmlEmailDocument + *Sections + wrapper into one component body.
Removes separate MjmlEmailDocument helper and *Sections from UI files.
"""

from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
UI_DIR = ROOT / "registry/bases/mjml-react/ui"

STEM_EXPORT_PREVIEW: dict[str, tuple[str, str]] = {
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

DOC_HEAD = """      <MjmlHead>
        <MjmlPreview>{previewLabel}</MjmlPreview>
        <MjmlAttributes>
          <MjmlAll color={fg} fontFamily={sans} />
          <MjmlText fontSize={baseFs} lineHeight={lh} />
        </MjmlAttributes>
      </MjmlHead>
      <MjmlBody backgroundColor={bg} width={width}>
        <MjmlWrapper padding="0">"""

DOC_TAIL = """        </MjmlWrapper>
      </MjmlBody>"""

DOC_VARS = """
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
  const previewLabel = "{preview}";
"""


def strip_document_helper(text: str) -> str:
    text = re.sub(
        r"\ninterface MjmlEmailDocumentProps \{[\s\S]*?\n\};\n\n"
        r"const MjmlEmailDocument = \(\{[\s\S]*?\n\};\n\n",
        "\n",
        text,
        count=1,
    )
    text = re.sub(r'\nimport type \{ ReactNode \} from "react";\n', "\n", text)
    text = re.sub(r'\nimport type \{ TailwindConfig \} from "react-email";\n', "\n", text)
    return text


def strip_wrapper_export(text: str, export_name: str) -> str:
    pat = rf"\nexport const {export_name} = \(props: {export_name}Props\) => \(\s*"
    pat += r"<MjmlEmailDocument[^\n]+\n\s*<[^>]+Sections \{{\.\.\.props}} />\s*</MjmlEmailDocument>\s*\);\s*\n"
    text = re.sub(pat, "\n", text)
    return text


def rename_sections_to_main(text: str, export_name: str) -> str:
    return text.replace(f"export const {export_name}Sections =", f"export const {export_name} =", 1)


def wrap_sections_return(text: str, export_name: str, preview: str) -> str:
    """Insert doc vars after first resolveEmailTheme in main component; wrap return body in <Mjml>..."""
    sections_fn = f"export const {export_name} = ("
    idx = text.find(sections_fn)
    if idx == -1:
        raise ValueError(f"Cannot find {export_name}=")

    # First `const t = resolveEmailTheme` in this function — insert after its line
    fn_start = idx
    rest = text[fn_start:]
    m = re.search(r"(\n  const t = resolveEmailTheme\(theme\);)\n", rest)
    if not m:
        raise ValueError(f"No resolveEmailTheme(theme) in {export_name}")
    insert_at = fn_start + m.end()
    vars_block = DOC_VARS.format(preview=preview)
    text = text[:insert_at] + vars_block + text[insert_at:]

    # Find `return (` that belongs to this function — first return after export const Name
    fn_text = text[fn_start:]
    rm = re.search(r"return \(\s*\n\s*<MjmlSection", fn_text)
    if not rm:
        rm = re.search(r"return \(\s*\n\s*<MjmlButton", fn_text)  # cta edge
    if not rm:
        raise ValueError(f"No MjmlSection return in {export_name}")
    ret_start = fn_start + rm.start()
    ret_open = text[ret_start : ret_start + 200]
    # Insert <Mjml> before first <MjmlSection or first element
    # Replace `return (\n    <MjmlSection` with full head + Mjml open
    old = "return (\n    <MjmlSection"
    if old not in text[ret_start : ret_start + 500]:
        old = "return (\n      <MjmlSection"  # different indent after fmt
        sub = (
            "return (\n    <Mjml>\n"
            + DOC_HEAD.format(previewLabel="{previewLabel}")
            + "\n      <MjmlSection"
        )
    else:
        sub = (
            "return (\n    <Mjml>\n"
            + DOC_HEAD.format(previewLabel="{previewLabel}")
            + "\n      <MjmlSection"
        )
    text = text.replace(old, sub, 1)

    # Close: find `</MjmlSection>\n  );` that closes Sections return — last before `};` for this function
    # Use last occurrence of </MjmlSection> before PreviewProps
    preview_idx = text.find(f"{export_name}.PreviewProps")
    before = text[:preview_idx]
    last_sec = before.rfind("</MjmlSection>")
    if last_sec == -1:
        raise ValueError("no closing section")
    # Find the `);` after this </MjmlSection>
    close_paren = text.find("\n  );", last_sec)
    if close_paren == -1:
        close_paren = text.find("\n    );", last_sec)
    # Insert DOC_TAIL + </Mjml> before `);`
    inner_close = (
        "\n      " + DOC_TAIL + "\n    </Mjml>\n  );"
    )
    # Replace `</MjmlSection>\n  );` at the position matching this return
    text = text[:last_sec] + text[last_sec:close_paren].replace(
        "</MjmlSection>\n  );",
        "</MjmlSection>" + inner_close.replace("\n  );", "\n  );", 1),
    )
    """
    Let me simplify: replace pattern `</MjmlSection>\n  );` that closes the main return — but multiple MjmlSection...

    For testimonial, nested MjmlSection inside. The OUTERMOST return closes with top-level section.
    """

    raise NotImplementedError("use manual merge for nested structures")


def main() -> None:
    for stem, (export_name, preview) in STEM_EXPORT_PREVIEW.items():
        path = UI_DIR / f"{stem}.tsx"
        if not path.exists():
            continue
        # manual files only — script incomplete
        print("see manual", path)


if __name__ == "__main__":
    main()
