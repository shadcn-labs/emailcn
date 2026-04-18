import Link from "next/link";
import { Suspense } from "react";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { siteConfig } from "@/lib/config";
import { GithubIcon } from "./icons";

export const StarsCount = async () => {
  const repoPath = siteConfig.links.github.replace("https://github.com/", "");
  const data = await fetch(`https://api.github.com/repos/${repoPath}`, {
    next: { revalidate: 86_400 },
  });
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
    <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
      <GithubIcon />
      <Suspense fallback={<Skeleton className="h-4" />}>
        <StarsCount />
      </Suspense>
    </Link>
  </Button>
);
