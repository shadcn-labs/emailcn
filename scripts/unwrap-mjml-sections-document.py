#!/usr/bin/env python3
"""Remove duplicate MjmlEmailDocument wrapper inside *Sections components."""

from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
UI = ROOT / "registry/bases/mjml-react/ui"


def unwrap_sections(text: str) -> str:
    m = re.search(
        r"(export const \w+Sections = [\s\S]+?)(\n\nexport const \w+ = \(props)",
        text,
    )
    if not m:
        raise ValueError("Could not find *Sections + wrapper pattern")
    sec = m.group(1)
    bridge = m.group(2)
    sec2 = re.sub(
        r"<MjmlEmailDocument preview=\"[^\"]+\" theme=\{theme\}>\s*",
        "",
        sec,
        count=1,
    )
    sec2 = re.sub(r"\s*</MjmlEmailDocument>", "", sec2, count=1)
    return text[: m.start()] + sec2 + bridge + text[m.end() :]


def main() -> None:
    for path in sorted(UI.glob("*.tsx")):
        text = path.read_text()
        if "Sections =" not in text or "<MjmlEmailDocument preview=" not in text:
            continue
        if "Sections" in text and "MjmlEmailDocument preview" in text.split("export const")[1]:
            pass
        new_text = unwrap_sections(text)
        path.write_text(new_text)
        print(f"unwrapped {path.name}")


if __name__ == "__main__":
    main()
