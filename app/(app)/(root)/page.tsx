import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";
import { BreadcrumbJsonLd } from "@/seo/json-ld";

export const dynamic = "force-static";
export const revalidate = false;

export default function IndexPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }]} />
      <section className="relative overflow-hidden">
        <div className="container-wrapper relative">
          <div className="container flex flex-col items-center gap-8 py-20 text-center md:py-28 lg:py-36">
            <h1 className="max-w-7xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl from-foreground via-foreground to-foreground/65 bg-linear-to-b bg-clip-text text-transparent">
              Beautiful emails, made simple
            </h1>

            <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Ready to use, customizable email components for React.
              <br className="hidden sm:block" />
              Built on React Email. Distributed via shadcn.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button asChild size="lg">
                <Link href={ROUTES.DOCS_INSTALLATION}>
                  Get Started
                  <ArrowRightIcon className="ml-2 size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={ROUTES.DOCS_COMPONENTS}>Browse Components</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container-wrapper pb-8 lg:pb-12">
        <div className="container"></div>
      </section>
    </>
  );
}
