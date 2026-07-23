import { notFound } from "next/navigation";

import { isHiddenDocPath, isHiddenDocUrl } from "@/lib/docs";
import { getLLMText, getPageMarkdownUrl, source } from "@/lib/source";

export const revalidate = false;

export const GET = async (
  _req: Request,
  { params }: RouteContext<"/llms.mdx/docs/[[...slug]]">
) => {
  const { slug } = await params;
  const pageSlug = slug?.slice(0, -1);
  if (isHiddenDocPath(pageSlug)) {
    notFound();
  }

  const page = source.getPage(pageSlug);
  if (!page) {
    notFound();
  }

  return new Response(await getLLMText(page), {
    headers: {
      "Content-Type": "text/markdown",
    },
  });
};

export const generateStaticParams = () =>
  source
    .getPages()
    .filter((page) => !isHiddenDocUrl(page.url))
    .map((page) => ({
      lang: page.locale,
      slug: getPageMarkdownUrl(page).segments,
    }));
