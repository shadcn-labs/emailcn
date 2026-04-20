#!/usr/bin/env python3
"""Remove MjmlEmailDocument helper + wrapper export; rename *Sections -> main export."""

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


def strip_helper(text: str) -> str:
    text = re.sub(
        r'\nimport type \{ ReactNode \} from "react";\n'
        r'import type \{ TailwindConfig \} from "react-email";\n'
        r'\ninterface MjmlEmailDocumentProps \{[\s\S]*?\};\n\n'
        r'const MjmlEmailDocument = \(\{[\s\S]*?\n\};\n\n',
        "\n",
        text,
        count=1,
    )
    return text


def strip_wrapper(text: str, export_name: str, props_interface: str) -> str:
    pat2 = rf"\nexport const {export_name} = \(props: {props_interface}\) => \(\s*[\s\S]*?\);\s*\n"
    text2, n2 = re.subn(pat2, "\n", text, count=1)
    if n2 != 1:
        raise RuntimeError(f"wrapper not removed for {export_name}, n2={n2}")
    return text2


def main() -> None:
    for stem, (export_name, _) in STEM_EXPORT_PREVIEW.items():
        path = UI_DIR / f"{stem}.tsx"
        text = path.read_text()
        text = strip_helper(text)
        text = text.replace(f"export const {export_name}Sections =", f"export const {export_name} =", 1)
        text = strip_wrapper(text, export_name, f"{export_name}Props")
        path.write_text(text)
        print(path.name)


if __name__ == "__main__":
    main()
