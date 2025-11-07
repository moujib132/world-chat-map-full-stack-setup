
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[calc(var(--radius)*0.75)] text-sm font-semibold tracking-[0.08em] uppercase transition-all duration-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#1877F2]/30 focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-br from-[#1877F2] via-[#0095F6] to-[#1877F2] text-white shadow-[0_18px_38px_-18px_rgba(24,119,242,0.7)] hover:-translate-y-[1px] hover:shadow-[0_24px_46px_-20px_rgba(24,119,242,0.78)] active:translate-y-0 active:shadow-[0_16px_28px_-18px_rgba(24,119,242,0.6)]",
        secondary:
          "bg-white/85 text-[#0B1A3E] shadow-[0_18px_35px_-20px_rgba(24,119,242,0.45)] hover:bg-white/95 hover:-translate-y-[1px] active:bg-white/80 dark:bg-white/[0.12] dark:text-white dark:shadow-[0_18px_35px_-22px_rgba(11,26,62,0.7)]",
        outline:
          "border border-white/50 bg-white/30 text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-xl hover:bg-white/45 hover:-translate-y-[1px] dark:border-white/15 dark:bg-white/[0.08] dark:text-white",
        ghost:
          "bg-transparent text-foreground/80 hover:bg-white/20 hover:text-foreground hover:-translate-y-[1px] dark:text-white/75 dark:hover:bg-white/[0.08]",
        subtle:
          "bg-gradient-to-br from-white/70 via-white/60 to-white/50 text-foreground shadow-[0_18px_38px_-20px_rgba(24,119,242,0.35)] hover:bg-white/80 hover:-translate-y-[1px] dark:from-white/[0.12] dark:via-white/[0.1] dark:to-white/[0.06] dark:text-white",
      },
      size: {
        default: "h-12 px-6",
        sm: "h-10 px-4 text-xs tracking-[0.12em]",
        lg: "h-14 px-8 text-base tracking-[0.14em]",
        icon: "h-11 w-11 rounded-[calc(var(--radius)*0.7)]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }