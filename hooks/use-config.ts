import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export type PackageManager = "npm" | "yarn" | "pnpm" | "bun";

export type InstallationType = "cli" | "manual";

interface Config {
  style: "new-york-v4";
  packageManager: PackageManager;
  installationType: InstallationType;
}

const configAtom = atomWithStorage<Config>("config", {
  installationType: "cli",
  packageManager: "pnpm",
  style: "new-york-v4",
});

export const useConfig = () => useAtom(configAtom);
