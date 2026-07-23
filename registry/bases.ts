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
      logo: "<svg viewBox='4 4 24 24' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M24.456 24.485c.778-.778.925-1.83.839-2.739-.087-.92-.425-1.92-.905-2.917A19.4 19.4 0 0 0 22.682 16a19.4 19.4 0 0 0 1.708-2.829c.48-.997.818-1.996.905-2.917.085-.909-.061-1.961-.84-2.74-.777-.777-1.83-.924-2.738-.838-.921.087-1.92.425-2.918.905a19.3 19.3 0 0 0-2.828 1.707 19.4 19.4 0 0 0-2.83-1.707c-.996-.48-1.996-.818-2.916-.905-.91-.086-1.962.06-2.74.839s-.924 1.83-.839 2.739c.087.92.425 1.92.906 2.917.432.899 1.009 1.854 1.707 2.829a19.4 19.4 0 0 0-1.708 2.829c-.48.997-.818 1.996-.905 2.917-.085.909.061 1.961.84 2.74.777.777 1.83.924 2.739.838.92-.087 1.92-.425 2.917-.905a19.4 19.4 0 0 0 2.829-1.707c.974.698 1.93 1.274 2.828 1.707.997.48 1.997.818 2.918.905.909.086 1.96-.06 2.739-.839Zm-8.485-3.537a29 29 0 0 0 2.62-2.328A29 29 0 0 0 20.919 16a29 29 0 0 0-2.328-2.62 29 29 0 0 0-2.62-2.328c-.87.68-1.754 1.46-2.62 2.328A29 29 0 0 0 11.022 16c.68.87 1.46 1.753 2.327 2.62a29 29 0 0 0 2.62 2.328Zm1.179.866a31 31 0 0 0 2.44-2.195c.8-.801 1.536-1.622 2.195-2.44 1.934 2.813 2.678 5.303 1.673 6.308-1.006 1.005-3.495.261-6.308-1.672Zm-6.994-4.635a31 31 0 0 0 2.196 2.44c.8.8 1.621 1.537 2.44 2.195-2.813 1.934-5.303 2.678-6.308 1.673-1.006-1.005-.262-3.495 1.672-6.308Zm0-2.358a31 31 0 0 1 2.196-2.44c.8-.8 1.621-1.537 2.44-2.196-2.813-1.933-5.303-2.677-6.308-1.672-1.006 1.005-.262 3.495 1.672 6.308Zm6.994-4.635a31 31 0 0 1 2.44 2.195c.8.801 1.536 1.622 2.195 2.44 1.934-2.813 2.678-5.303 1.673-6.308-1.006-1.005-3.495-.261-6.308 1.672Z' fill='currentColor' stroke='currentColor' stroke-width='.5'/></svg>",
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
      logo: "<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><path d='M4.365 3.769a6 6 0 0 1 1.926-.158q5.875.007 11.745 0a3.37 3.37 0 0 1 3.151 2.011 3.3 3.3 0 0 1-3.151 4.549q-6.325-.007-12.65 0a3.3 3.3 0 0 1-3.357-2.928 3.23 3.23 0 0 1 2.336-3.474m21.445-.023a3.34 3.34 0 0 1 3.975 2.081 3.214 3.214 0 0 1-2.014 4.12 3.31 3.31 0 0 1-4.429-2.734 3.23 3.23 0 0 1 2.468-3.467m-12.869 9.287a9 9 0 0 1 1.93-.111c3.923.009 7.849 0 11.772.007a3.248 3.248 0 1 1-.014 6.494c-4.3 0-8.6.009-12.9 0a3.2 3.2 0 0 1-3.172-2.941 3.24 3.24 0 0 1 2.384-3.449m-8.402 8.923a7.4 7.4 0 0 1 1.318-.079c4.142.016 8.282-.007 12.422.011a3.255 3.255 0 0 1 3.176 3.4 3.3 3.3 0 0 1-3.2 3.093q-6.545.007-13.09 0a3.25 3.25 0 0 1-.63-6.418Zm21.05.075a3.363 3.363 0 0 1 4.163 1.937 3.305 3.305 0 1 1-6.418 1.1 3.18 3.18 0 0 1 2.255-3.037' fill='currentColor' /><path d='M4.361 13a3.322 3.322 0 1 1-1.91 4.851A3.338 3.338 0 0 1 4.361 13' style='fill:currentColor'/></svg>",
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
      logo: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 126 113' fill='none'><path fill-rule='evenodd' clip-rule='evenodd' d='M.2 50v63h125.6V50h-8v55H8.2V50z' fill='currentColor'/><path d='M0 53.429v-6.003l48.307-24.614v9.606l-37.055 17.86.3-.601v1.5l-.3-.6 37.055 17.86v9.605zM79.437 0 54.683 92h-8.101L71.336 0zM126 53.429 77.693 78.042v-9.605l37.055-17.86-.3.6v-1.5l.3.6-37.055-17.86v-9.605L126 47.426z' fill='currentColor'/></svg>",
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
