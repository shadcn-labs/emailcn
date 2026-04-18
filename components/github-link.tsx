import Link from "next/link";
import { Suspense } from "react";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { GITHUB, LINK } from "@/constants/links";

import { GithubIcon } from "./icons";

export const StarsCount = async () => {
  const data = await fetch(
    `https://api.github.com/repos/${GITHUB.user}/${GITHUB.repo}`,
    {
      next: { revalidate: 86_400 },
    }
  );
  const json = await data.json();

  return (
    <span className="text-muted-foreground text-xs tabular-nums">
      {json.stargazers_count >= 1000
        ? `${(json.stargazers_count / 1000).toFixed(1)}k`
        : (json.stargazers_count?.toLocaleString() ?? "0")}
    </span>
  );
};

export const GitHubLink = () => (
  <Button asChild size="sm" variant="ghost" className="h-8 shadow-none">
    <Link href={LINK.GITHUB} target="_blank" rel="noreferrer">
      <GithubIcon />
      <Suspense fallback={<Skeleton className="h-4" />}>
        <StarsCount />
      </Suspense>
    </Link>
  </Button>
);
