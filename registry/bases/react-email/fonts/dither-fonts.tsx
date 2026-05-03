import { Font } from "react-email";

/** From [Resend Protocol demo](https://github.com/resend/react-email/blob/canary/apps/demo/emails/03-Protocol/dither-fonts.tsx). */
export const DitherFonts = () => (
  <>
    <Font
      fallbackFontFamily={["Arial", "sans-serif"]}
      fontFamily="IBM Plex Sans Condensed"
      fontStyle="normal"
      fontWeight={500}
      webFont={{
        format: "truetype",
        url: "https://fonts.gstatic.com/s/ibmplexsanscondensed/v15/Gg8gN4UfRSqiPg7Jn2ZI12V4DCEwkj1E4LVeHY5a64vr.ttf",
      }}
    />
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
