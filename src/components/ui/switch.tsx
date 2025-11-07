import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-7 w-14 shrink-0 cursor-pointer items-center rounded-full border border-white/50 bg-white/30 p-0.5 transition-all duration-300 backdrop-blur-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#1877F2]/30 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-[#1877F2]/80 data-[state=checked]:via-[#0095F6]/70 data-[state=checked]:to-[#1877F2]/80 data-[state=unchecked]:bg-white/25 dark:border-white/15 dark:bg-white/[0.08]",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-6 w-6 rounded-full bg-white shadow-[0_12px_20px_-15px_rgba(24,119,242,0.8)] ring-0 transition-transform duration-300 data-[state=checked]:translate-x-7 data-[state=unchecked]:translate-x-0 dark:bg-white/90"
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
