"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const SB_W = 16
const BTN_H = 16
const ROW_H = 18

const trackBg: React.CSSProperties = {
  backgroundColor: "var(--scrollbar)",
}

function Win32Scrollbar({
  containerRef,
  header,
  footer,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>
  header?: React.ReactNode
  footer?: React.ReactNode
}) {
  const [s, setS] = React.useState({
    thumbTop: 0,
    thumbHeight: 20,
    canScroll: false,
    theadH: 0,
    tfootH: 0,
  })

  const update = React.useCallback(() => {
    const el = containerRef.current
    if (!el) return
    const thead = el.querySelector<HTMLElement>("table > thead")
    const tfoot = el.querySelector<HTMLElement>("table > tfoot")
    const theadH = thead?.offsetHeight ?? 0
    const tfootH = tfoot?.offsetHeight ?? 0
    const trackH = el.clientHeight - theadH - tfootH - BTN_H
    const range = el.scrollHeight - el.clientHeight

    if (range <= 0 || trackH <= 0) {
      setS((p) => ({ ...p, canScroll: false, theadH, tfootH }))
      return
    }

    const thumbH = Math.max(BTN_H, (el.clientHeight / el.scrollHeight) * trackH)
    const thumbTop = ((trackH - thumbH) * el.scrollTop) / range
    setS({ thumbTop, thumbHeight: thumbH, canScroll: true, theadH, tfootH })
  }, [containerRef])

  React.useEffect(() => {
    const el = containerRef.current
    if (!el) return
    update()
    el.addEventListener("scroll", update, { passive: true })
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => {
      el.removeEventListener("scroll", update)
      ro.disconnect()
    }
  }, [containerRef, update])

  const onThumbDown = (e: React.MouseEvent) => {
    const el = containerRef.current
    if (!el) return
    e.preventDefault()
    const startY = e.clientY
    const startScroll = el.scrollTop
    const trackUsable =
      el.clientHeight - s.theadH - s.tfootH - BTN_H - s.thumbHeight
    const range = el.scrollHeight - el.clientHeight

    const onMove = (ev: MouseEvent) => {
      if (trackUsable <= 0 || range <= 0) return
      el.scrollTop = startScroll + ((ev.clientY - startY) / trackUsable) * range
    }
    const onUp = () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseup", onUp)
    }
    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseup", onUp)
  }

  const holdRef = React.useRef<ReturnType<typeof setInterval> | null>(null)
  const startHold = (dir: 1 | -1) => {
    // const tick = () => {
    //   if (containerRef.current) containerRef.current.scrollTop += dir * ROW_H
    // }
    // tick()
    // holdRef.current = setInterval(tick, 60)
    if (containerRef.current) containerRef.current.scrollTop += dir * ROW_H
  }
  const stopHold = () => {
    if (holdRef.current) {
      clearInterval(holdRef.current)
      holdRef.current = null
    }
  }

  const btn =
    "bevel-out bg-panel flex items-center justify-center cursor-default select-none shrink-0 active:bevel-in"

  return (
    <div className="flex flex-col self-stretch shrink-0" style={{ width: SB_W }}>
      {/* header row extension — no left border so it merges with last th */}
      <div
        className="bg-panel shrink-0 overflow-hidden px-1 py-0.5"
        style={{
          height: s.theadH - BTN_H - 1,
          borderTop: "1px solid var(--border-light)",
          borderRight: "1px solid var(--border-dark)",
          borderBottom: "1px solid var(--border-dark)",
        }}
      >{header}</div>

      {/* Up button */}
      <div
        className={btn}
        style={{ height: BTN_H }}
        onMouseDown={() => startHold(-1)}
        onMouseUp={stopHold}
        onMouseLeave={stopHold}
      >
        <svg width="7" height="5" viewBox="0 0 7 5">
          <polygon points="3.5,0 7,5 0,5" fill="#232E19" />
        </svg>
      </div>

      {/* Track + thumb */}
      <div className="relative flex-1" style={trackBg}>
        <div
          className="absolute inset-x-0 bevel-out bg-panel cursor-default"
          style={{ top: s.thumbTop, height: s.thumbHeight + 1 }}
          onMouseDown={onThumbDown}
        />
      </div>

      {/* Down button */}
      <div
        className={btn}
        style={{ height: BTN_H }}
        onMouseDown={() => startHold(1)}
        onMouseUp={stopHold}
        onMouseLeave={stopHold}
      >
        <svg width="7" height="5" viewBox="0 0 7 5">
          <polygon points="3.5,5 7,0 0,0" fill="#232E19" />
        </svg>
      </div>

      {/* footer row extension */}
      <div
        className="bg-panel shrink-0 overflow-hidden px-1 py-0.5"
        style={{
          height: s.tfootH + 0.5,
          borderTop: "1px solid var(--border-light)",
          borderRight: "1px solid var(--border-dark)",
          borderBottom: "1px solid var(--border-dark)",
        }}
      >{footer}</div>
    </div>
  )
}

function Table({
  className,
  containerClassName,
  scrollbarHeader,
  scrollbarFooter,
  ...props
}: React.ComponentProps<"table"> & {
  containerClassName?: string
  scrollbarHeader?: React.ReactNode
  scrollbarFooter?: React.ReactNode
}) {
  const containerRef = React.useRef<HTMLDivElement>(null)

  return (
    <div className="flex [&_thead_tr:first-child>*:last-child]:[border-right:none] [&_tfoot_tr:last-child>*:last-child]:[border-right:none]">
      <div
        ref={containerRef}
        className={cn(
          "flex-1 min-w-0 overflow-x-auto overflow-y-scroll [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [scroll-snap-type:y_mandatory] [scroll-behavior:auto]",
          containerClassName
        )}
      >
        <table
          data-slot="table"
          className={cn("w-full caption-top border-separate border-spacing-0", className)}
          {...props}
        />
      </div>
      <Win32Scrollbar containerRef={containerRef} header={scrollbarHeader} footer={scrollbarFooter} />
    </div>
  )
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn("sticky top-0 z-10", className)}
      {...props}
    />
  )
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return <tbody data-slot="table-body" className={cn(className)} {...props} />
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn("sticky bottom-0 z-10 h-4 [&_td]:bevel-out [&_td]:bg-panel", className)}
      {...props}
    />
  )
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "[scroll-snap-align:start] hover:bg-panel-hover data-[state=selected]:bg-primary data-[state=selected]:text-primary-foreground",
        className
      )}
      {...props}
    />
  )
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "bevel-out bg-panel px-1 py-0 text-left align-middle font-normal whitespace-nowrap text-foreground cursor-default select-none [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "px-1 py-0.5 h-4! align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

function TableCaption({ className, ...props }: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn(
        "py-0.5 px-1 bg-panel bevel-out text-left text-foreground",
        className
      )}
      {...props}
    />
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
