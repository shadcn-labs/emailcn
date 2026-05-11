import { Hero } from "@/registry/bases/react-email/ui/hero";

export default function HeroSlantedLeftDemo() {
  return <Hero {...Hero.PreviewProps} variant="slanted-left" />;
}

HeroSlantedLeftDemo.PreviewProps = {
  ...Hero.PreviewProps,
  variant: "slanted-left" as const,
};
