'use client'

import * as React from "react"

import { cn } from "@/lib/utils"

export interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  pauseOnHover?: boolean
  direction?: "left" | "right"
  speed?: number
  repeat?: boolean
}

export function Marquee({
  children,
  pauseOnHover = false,
  direction = "left",
  speed = 30,
  repeat = true,
  className,
  ...props
}: MarqueeProps) {
  const items = React.Children.toArray(children)
  const contentCount = items.length
  const containerRef = React.useRef<HTMLDivElement>(null)
  const contentRef = React.useRef<HTMLDivElement>(null)
  const [offset, setOffset] = React.useState(0)

  React.useEffect(() => {
    const container = containerRef.current
    const content = contentRef.current

    if (!container || !content) {
      return
    }

    const updateOffset = () => {
      const containerWidth = container.offsetWidth
      const contentWidth = content.scrollWidth
      const nextOffset = Math.max(contentWidth - containerWidth, 0)

      setOffset(nextOffset)
    }

    updateOffset()

    if (typeof ResizeObserver === "undefined") {
      return
    }

    const resizeObserver = new ResizeObserver(updateOffset)

    resizeObserver.observe(container)
    resizeObserver.observe(content)

    return () => resizeObserver.disconnect()
  }, [contentCount])

  const shouldRepeat = repeat && contentCount > 0
  const shouldAnimate = shouldRepeat || offset > 0
  const halfOffset = Math.max(offset / 2, 0)

  const marqueeClasses = cn(
    "flex w-max items-center will-change-transform",
    shouldRepeat && "animate-marquee",
    !shouldRepeat && offset > 0 && "animate-marquee-bounce",
    !shouldRepeat && "mx-auto",
    pauseOnHover && "hover:[animation-play-state:paused]",
    shouldRepeat && direction === "right" && "animate-marquee-reverse"
  )

  const marqueeStyle = React.useMemo(
    () =>
      {
        const base: React.CSSProperties = {
          "--duration": `${Math.max(speed, 1)}s`,
          "--half-offset": `${halfOffset}px`,
        }

        if (!shouldRepeat) {
          base.animationDirection = direction === "right" ? "normal" : "reverse"
        }

        return base
      },
    [speed, halfOffset, shouldRepeat, direction]
  )

  const content = (
    <div
      ref={contentRef}
      className={marqueeClasses}
      style={marqueeStyle}
      role={shouldAnimate ? "presentation" : undefined}
    >
      {items.map((child, index) => (
        <div key={`marquee-item-${index}`} className="flex h-full items-center px-6">
          {child}
        </div>
      ))}
      {shouldRepeat &&
        items.map((child, index) => (
          <div
            key={`marquee-item-duplicate-${index}`}
            className="flex h-full items-center px-6"
            aria-hidden="true"
          >
            {child}
          </div>
        ))}
    </div>
  )

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full overflow-hidden", className)}
      {...props}
    >
      {shouldRepeat ? (
        content
      ) : (
        <div className="flex w-full justify-center">{content}</div>
      )}
    </div>
  )
}
