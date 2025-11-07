import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-[calc(var(--radius)*0.7)] border border-white/40 bg-white/50 px-4 text-base text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-xl transition-all duration-300 placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#1877F2]/30 focus-visible:ring-offset-0 focus-visible:border-white/60 disabled:cursor-not-allowed disabled:opacity-50 dark:border-white/15 dark:bg-white/[0.08] dark:text-white dark:placeholder:text-white/50",
          "file:border-0 file:bg-transparent file:text-sm file:font-medium file:uppercase file:tracking-[0.2em] file:text-foreground/80 dark:file:text-white/80",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
