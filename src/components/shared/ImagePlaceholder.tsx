import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function ImagePlaceholder({ label = "图片待提供", className }: { label?: string; className?: string }) {
  return (
    <div
      className={cn(
        "flex min-h-40 items-center justify-center rounded-2xl border border-border-warm bg-[radial-gradient(circle_at_35%_20%,rgba(231,201,138,.55),transparent_34%),linear-gradient(135deg,#fffdf8,#efe0c9)] text-brand-brown",
        className,
      )}
    >
      <div className="text-center">
        <ImageIcon className="mx-auto mb-2 h-8 w-8 text-brand-gold" aria-hidden />
        <span className="text-sm font-semibold">{label}</span>
      </div>
    </div>
  );
}
