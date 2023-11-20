"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "w-[42px] h-[25px] bg-blackA6 rounded-full relative shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black data-[state=checked]:bg-teal outline-none cursor-default",
      className
    )}
    {...props}
    ref={ref}
    // style={{ "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)" }}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "block w-[21px] h-[21px] bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]"
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
