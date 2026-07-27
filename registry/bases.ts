import {
  JSXEmailIcon,
  MJMLReactIcon,
  ReactEmailIcon,
} from "@/components/icons";
import { jsxEmailRegistryBase } from "@/registry/bases/jsx-email/registry";
import { mjmlReactRegistryBase } from "@/registry/bases/mjml-react/registry";
import { reactEmailRegistryBase } from "@/registry/bases/react-email/registry";

export const BASES = [
  {
    ...reactEmailRegistryBase,
    dependencies: ["react-email"],
    description:
      "Build responsive emails as React components and render them to HTML.",
    meta: {
      logo: ReactEmailIcon,
    },
    title: "React Email",
    type: "registry:style",
  },
  {
    ...mjmlReactRegistryBase,
    dependencies: ["@faire/mjml-react", "mjml"],
    description:
      "Author MJML markup with React components (@faire/mjml-react) and compile to HTML.",
    meta: {
      logo: MJMLReactIcon,
    },
    title: "MJML React",
    type: "registry:style",
  },
  {
    ...jsxEmailRegistryBase,
    dependencies: ["jsx-email"],
    description:
      "A React library for building emails with JSX. Write your emails as components and render them to HTML.",
    meta: {
      logo: JSXEmailIcon,
    },
    title: "JSX Email",
    type: "registry:style",
  },
] as const;

export type Base = (typeof BASES)[number];
export type BaseName = Base["name"];

export const DEFAULT_BASE = BASES[0].name;

export const BASE_NAMES = BASES.map((base) => base.name) as [
  BaseName,
  ...BaseName[],
];
export const getBase = (name: BaseName) =>
  BASES.find((base) => base.name === name);
