import * as React from "react";

const defaultOptions: MutationObserverInit = {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true,
};

export const useMutationObserver = (
  ref: React.RefObject<HTMLElement | null>,
  callback: MutationCallback,
  options: MutationObserverInit = defaultOptions
) => {
  React.useEffect(() => {
    if (ref.current) {
      const observer = new MutationObserver(callback);
      observer.observe(ref.current, options);
      return () => observer.disconnect();
    }
  }, [ref, callback, options]);
};
