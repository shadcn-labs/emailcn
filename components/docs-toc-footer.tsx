import { Button } from "@/components/ui/button";
import { LINK } from "@/constants/links";
import { cn } from "@/lib/utils";

export const DocsTocFooter = ({ className }: React.ComponentProps<"div">) => (
  <div
    className={cn(
      "group relative flex flex-col gap-2 rounded-lg bg-surface p-6 text-sm text-surface-foreground",
      className
    )}
  >
    <div className="text-base leading-tight font-semibold text-balance group-hover:underline">
      Beautiful terminal UIs, made simple
    </div>
    <p className="text-muted-foreground leading-snug">
      Ready-to-use React components for the terminal, built on <u>Ink</u>,
      distributed via shadcn.
    </p>
    <Button variant="outline" size="sm" className="mt-2">
      Go to termcn.dev
    </Button>
    <a
      href={LINK.TERMCN}
      target="_blank"
      rel="noreferrer"
      className="absolute inset-0 rounded-lg"
      aria-hidden
      tabIndex={-1}
    >
      <span className="sr-only">
        Open TermCN components documentation (termcn.dev)
      </span>
    </a>
  </div>
);
