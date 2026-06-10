import { Font } from "jsx-email";

/** From [Resend Matte demo](https://github.com/resend/react-email/blob/canary/apps/demo/emails/02-Matte/collage-fonts.tsx). */
export const CollageFonts = () => (
  <>
    <Font
      fallbackFontFamily={["Arial", "sans-serif"]}
      fontFamily="Inter"
      fontStyle="normal"
      fontWeight={300}
      webFont={{
        format: "truetype",
        url: "https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuOKfMZg.ttf",
      }}
    />
    <Font
      fallbackFontFamily={["Arial", "sans-serif"]}
      fontFamily="Inter"
      fontStyle="normal"
      fontWeight={400}
      webFont={{
        format: "woff2",
        url: "https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7W0Q5nw.woff2",
      }}
    />
    <Font
      fallbackFontFamily={["Arial", "sans-serif"]}
      fontFamily="Inter"
      fontStyle="normal"
      fontWeight={500}
      webFont={{
        format: "truetype",
        url: "https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuI6fMZg.ttf",
      }}
    />
  </>
);
