#!/usr/bin/env python3
"""Move imports that ended up after inlined MjmlEmailDocument back to the top."""

from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
BLOCKS = ROOT / "registry/bases/mjml-react/blocks"


def fix_file(path: Path) -> bool:
    text = path.read_text()
    if "interface MjmlEmailDocumentProps" not in text:
        return False
    m = re.search(
        r"\n((?:import [^\n]+\n)+)\n(?=type Props|interface Props|export const)",
        text,
    )
    if not m:
        return False
    orphaned = m.group(1).rstrip() + "\n\n"
    text = text[: m.start()] + "\n" + text[m.end() :]
    ins = re.search(
        r'(import \{ resolveEmailTheme \} from "@/registry/lib/resolve-theme";)\n',
        text,
    )
    if not ins:
        raise RuntimeError(f"resolveEmailTheme not found: {path}")
    text = text[: ins.end()] + orphaned + text[ins.end() :]
    path.write_text(text)
    return True


def main() -> None:
    for path in sorted(BLOCKS.glob("*.tsx")):
        if fix_file(path):
            print(f"fixed {path.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
