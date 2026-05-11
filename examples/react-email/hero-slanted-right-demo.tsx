import { Hero } from "@/registry/bases/react-email/ui/hero";

export default function HeroSlantedRightDemo() {
  return <Hero {...Hero.PreviewProps} variant="slanted-right" />;
}

HeroSlantedRightDemo.PreviewProps = {
  ...Hero.PreviewProps,
  variant: "slanted-right" as const,
};
