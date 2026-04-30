import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export type EmailViewport = "desktop" | "tablet" | "mobile";

const viewportAtom = atomWithStorage<EmailViewport>("viewport", "desktop");

export const useViewportToggle = () => useAtom(viewportAtom);
