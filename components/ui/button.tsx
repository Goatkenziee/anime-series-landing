import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost" | "outline";
  size?: "default" | "sm" | "lg";
  asChild?: boolean;
  children?: React.ReactNode;
}

export function Button({ className, variant = "default", size = "default", asChild, children, ...props }: ButtonProps) {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<{ className?: string }>, {
      className: cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-50",
        {
          "bg-primary text-primary-foreground hover:opacity-90 glow": variant === "default",
          "hover:bg-muted/50 text-foreground": variant === "ghost",
          "border border-border bg-transparent hover:bg-muted/20": variant === "outline",
        },
        {
          "h-10 px-4 py-2": size === "default",
          "h-9 rounded-md px-3": size === "sm",
          "h-12 rounded-xl px-8 text-base": size === "lg",
        },
        className
      ),
    });
  }

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-50",
        {
          "bg-primary text-primary-foreground hover:opacity-90 glow": variant === "default",
          "hover:bg-muted/50 text-foreground": variant === "ghost",
          "border border-border bg-transparent hover:bg-muted/20": variant === "outline",
        },
        {
          "h-10 px-4 py-2": size === "default",
          "h-9 rounded-md px-3": size === "sm",
          "h-12 rounded-xl px-8 text-base": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
