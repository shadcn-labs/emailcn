import { MjmlEmailDocument } from "@/registry/bases/mjml-react/lib/document";
import Hero from "@/registry/bases/mjml-react/ui/hero";
import { theme as defaultTheme } from "@/registry/themes/default";

export default function HeroDemo() {
  return (
    <MjmlEmailDocument preview="hero" theme={defaultTheme}>
      <Hero {...Hero.PreviewProps} />
    </MjmlEmailDocument>
  );
}
