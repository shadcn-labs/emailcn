"use client";

import { SendIcon } from "lucide-react";
import { useId, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface EmailSendButtonProps {
  markup: string;
  defaultSubject?: string;
  className?: string;
}

const SEND_ENDPOINT = "https://react.email/api/send/test";

export const EmailSendButton = ({
  markup,
  defaultSubject = "",
  className,
}: EmailSendButtonProps) => {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState(defaultSubject);
  const [isSending, setIsSending] = useState(false);
  const [open, setOpen] = useState(false);

  const toId = useId();
  const subjectId = useId();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    try {
      const res = await fetch(SEND_ENDPOINT, {
        body: JSON.stringify({ html: markup, subject, to }),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });
      if (res.ok) {
        toast.success("Email sent! Check your inbox.");
        setOpen(false);
      } else if (res.status === 429) {
        const json = (await res.json()) as { error?: string };
        toast.error(
          json.error ?? "Too many test emails sent — try again soon."
        );
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          className={cn("h-7 gap-1", className)}
          size="sm"
          variant="secondary"
        >
          <SendIcon className="size-3.5" /> Send
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-80 p-3" sideOffset={8}>
        <form className="flex flex-col gap-3" onSubmit={onSubmit}>
          <div className="flex flex-col gap-1.5">
            <label
              className="text-muted-foreground text-xs uppercase"
              htmlFor={toId}
            >
              Recipient
            </label>
            <Input
              autoFocus
              id={toId}
              onChange={(e) => setTo(e.target.value)}
              placeholder="you@example.com"
              required
              type="email"
              value={to}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              className="text-muted-foreground text-xs uppercase"
              htmlFor={subjectId}
            >
              Subject
            </label>
            <Input
              id={subjectId}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="My Email"
              required
              type="text"
              value={subject}
            />
          </div>
          <div className="mt-1 flex items-center justify-between">
            <p className="text-muted-foreground text-xs">
              Powered by{" "}
              <a
                className="underline"
                href="https://go.resend.com/react-email"
                rel="noreferrer"
                target="_blank"
              >
                Resend
              </a>
            </p>
            <Button
              disabled={!subject || !to || isSending}
              size="sm"
              type="submit"
            >
              {isSending ? "Sending…" : "Send"}
            </Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
};
