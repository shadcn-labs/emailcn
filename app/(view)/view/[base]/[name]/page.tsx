import { notFound } from "next/navigation";
import type { ComponentType } from "react";

import { demos } from "@/examples/__index__";
import { renderEmail } from "@/lib/render-email";
import { BASE_NAMES } from "@/registry/bases";
import type { BaseName } from "@/registry/bases";

export const revalidate = false;
export const dynamic = "force-static";
export const dynamicParams = false;

interface ViewPageProps {
  params: Promise<{
    base: string;
    name: string;
  }>;
}

export const generateStaticParams = () =>
  BASE_NAMES.flatMap((base) =>
    Object.keys(demos[base]).map((name) => ({
      base,
      name,
    }))
  );

const getBase = (value: string): BaseName | undefined =>
  BASE_NAMES.find((base) => base === value);

const ViewPage = async ({ params }: ViewPageProps) => {
  const { base: requestedBase, name } = await params;
  const base = getBase(requestedBase);

  if (!base) {
    notFound();
  }

  const Demo = (demos[base] as Record<string, ComponentType | undefined>)[name];

  if (!Demo) {
    notFound();
  }
  const preview = await renderEmail({
    base,
    preview: <Demo />,
  });

  return (
    <iframe
      className="fixed inset-0 h-dvh w-screen border-0 bg-white"
      sandbox=""
      srcDoc={preview.html}
      title={`${name} preview`}
    />
  );
};

export default ViewPage;
