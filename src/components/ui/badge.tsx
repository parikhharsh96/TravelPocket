import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Image from "next/image";

const badgeVariants = cva(
  "inline-flex justify-center items-center",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        popular: "inline-flex px-[6px] py-[4px] gap-[4px] bg-[#FCD205] text-[#1A2F46]", // Popular badge
        registration:
          "px-[8px] py-[6px] gap-[6px] bg-[#DFF8F1]", // Registrations Open
        outline: "border border-gray-300 text-gray-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const badgeIconVariants: Record<string, string> = {
  popular: "w-[10px] h-[12px]",
  registration: "w-[6px] h-[6px]",
  default: "w-[12px] h-[12px]",
  outline: "w-[12px] h-[12px]",
};

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  icon?: string; // path to icon (SVG/PNG)
}

function Badge({ className, variant, icon, children, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {icon && (
        <Image
          src={icon}
          alt="icon"
          width={16}
          height={16}
          className={cn("inline-block", badgeIconVariants[variant || "default"])}
        />
      )}
      {children}
    </div>
  );
}

export { Badge, badgeVariants };