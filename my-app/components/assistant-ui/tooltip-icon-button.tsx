"use client";

import { ComponentPropsWithoutRef, forwardRef } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Define the props type for the TooltipIconButton
export type TooltipIconButtonProps = ComponentPropsWithoutRef<typeof Button> & {
  tooltip: string; // Text for the tooltip
  side?: "top" | "bottom" | "left" | "right"; // Position of the tooltip
};

// Create the TooltipIconButton component using forwardRef
export const TooltipIconButton = forwardRef<HTMLButtonElement, TooltipIconButtonProps>(
  ({ children, tooltip, side = "bottom", className, ...rest }, ref) => {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost" // Button style
              size="icon" // Icon button size
              {...rest}
              className={cn("size-6 p-1", className)} // Combine custom classes with cn utility
              ref={ref}
            >
              {children}
              {/* Screen reader accessible text for the tooltip */}
              <span className="sr-only">{tooltip}</span>
            </Button>
          </TooltipTrigger>
          {/* Tooltip content with configurable position */}
          <TooltipContent side={side}>{tooltip}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }
);

// Set the display name for the component (useful for debugging)
TooltipIconButton.displayName = "TooltipIconButton";
