import { atom, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export type EmailViewport = "desktop" | "mobile";

type StoredEmailViewport = EmailViewport | "tablet";

const storedViewportAtom = atomWithStorage<StoredEmailViewport>(
  "viewport",
  "desktop"
);

const viewportAtom = atom(
  (get): EmailViewport => {
    const viewport = get(storedViewportAtom);
    return viewport === "tablet" ? "desktop" : viewport;
  },
  (_get, set, viewport: EmailViewport) => {
    set(storedViewportAtom, viewport);
  }
);

export const useViewportToggle = () => useAtom(viewportAtom);
