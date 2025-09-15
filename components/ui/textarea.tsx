import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const baseStyles =
  "flex w-full rounded-lg border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus-visible:ring-2 focus-visible:ring-[var(--primary)] disabled:cursor-not-allowed disabled:opacity-50"

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea className={cn(baseStyles, className)} ref={ref} {...props} />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }


