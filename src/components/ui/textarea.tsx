import * as React from "react"

import { cn } from "@/lib/utils"

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full rounded-[calc(var(--radius)*0.7)] border border-white/40 bg-white/50 px-4 py-3 text-sm text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-xl transition-all duration-300 placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#1877F2]/30 focus-visible:ring-offset-0 focus-visible:border-white/60 disabled:cursor-not-allowed disabled:opacity-50 dark:border-white/15 dark:bg-white/[0.08] dark:text-white dark:placeholder:text-white/50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
