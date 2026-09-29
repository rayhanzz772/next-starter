import Link from "next/link";
import { cn } from "@/components/utils";
import { Eye } from "lucide-react";

type BrandLogoProps = {
  className?: string;
};

export function BrandLogo({ className }: BrandLogoProps) {
  return (
    <Link
      href="/login"
      className={cn("inline-flex items-center gap-2.5 font-semibold tracking-tight", className)}
    >
      <span className="grid size-8 place-items-center rounded-md bg-foreground text-background">
        <Eye className="size-4" />
      </span>
    </Link>
  );
}