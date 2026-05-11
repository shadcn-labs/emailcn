import { Hero } from "@/registry/bases/react-email/ui/hero";

export default function HeroDefaultDemo() {
  return <Hero {...Hero.PreviewProps} variant="default" />;
}

HeroDefaultDemo.PreviewProps = {
  ...Hero.PreviewProps,
  variant: "default" as const,
};
