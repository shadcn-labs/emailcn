import { Faq } from "@/registry/bases/mjml-react/components/marketing/faq/faq";
import { defaultTheme } from "@/registry/themes/default";

export default function FaqDemo() {
  return (
    <Faq
      layout="boxed"
      marker="number"
      answerPosition="stacked"
      theme={defaultTheme}
    />
  );
}
