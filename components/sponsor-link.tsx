import { HeartHandshakeIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { LINK } from "@/constants/links";

export const SponsorLink = () => (
  <Button asChild size="sm" variant="ghost">
    <a href={LINK.SPONSOR} target="_blank" rel="noopener noreferrer">
      <HeartHandshakeIcon className="text-pink-500" />
      Sponsor
    </a>
  </Button>
);
