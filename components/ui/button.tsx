import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "default" | "ghost" | "outline";
const variants: Record<Variant, string> = {
  default: "bg-primary text-primary-foreground hover:opacity-90 glow",
  ghost: "bg-transparent hover:bg-muted text-foreground",
  outline: "border bg-transparent hover:bg-muted text-foreground",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", asChild = false, children, ...props }, ref) => {
    const baseClasses = cn(
      "inline-flex h-11 items-center justify-center rounded-lg px-6 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-50",
      variants[variant],
      className,
    );

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<{ className?: string }>, {
        className: cn(baseClasses, (children as React.ReactElement<{ className?: string }>).props.className),
        ...(props as Record<string, unknown>),
      });
    }

    return (
      <button ref={ref} className={baseClasses} {...props}>
        {children}
      </button>
    );
  },
);
Button.displayName = "Button";
