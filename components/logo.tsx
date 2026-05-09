import { cn } from "@/lib/utils";

export const LogoMark = ({
  className,
  ...props
}: React.ComponentProps<"svg">) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn("size-4", className)}
    {...props}
  >
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4z"
    />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2m-3-9h1m11.9 4-2.4 2.4m1.92-5.04-4.56 4.56"
    />
  </svg>
);

export const getLogoMarkSVG = (color: string) => `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" aria-label="EmailCN Logo">
    <path stroke="${color}" stroke-width="1.5" d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4z"/>
    <path stroke="${color}" stroke-width="1.5" d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2m-3-9h1m11.9 4-2.4 2.4m1.92-5.04-4.56 4.56"/>
  </svg>
`;
