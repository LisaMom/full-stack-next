
import * as React from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface NotFoundOopsProps extends React.HTMLAttributes<HTMLElement> {
  title?: string
  description?: string
  homeHref?: string
  homeLabel?: string
}

export function NotFoundOops({
  title = "Oops! Something went wrong",
  description = "The page you're looking for isn't found, we suggest you back to home.",
  homeHref = "/",
  homeLabel = "Back To Home Page",
  className,
  ...props
}: NotFoundOopsProps) {
  return (
    <section
      className={cn(
        "flex min-h-screen w-full flex-col items-center justify-center bg-background px-6 py-16 text-center",
        className
      )}
      {...props}
    >
      <Illustration className="w-full max-w-4xl" />

      <h1 className="mt-10 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
        {title}
      </h1>
      <p className="mt-5 max-w-xl text-lg text-muted-foreground">
        {description}
      </p>

      <Button
        size="lg"
        className="mt-8 h-14 rounded-full bg-[#C57542] px-7 text-base font-medium text-white hover:bg-[#B5683A] focus-visible:ring-[#C57542]/40"
      >
        <a href={homeHref}>{homeLabel}</a>
      </Button>
    </section>
  )
}

const ORANGE = "#C57542"
const TAN = "#C29873"
const BLOB = "#EBD3C3"
const BROWN = "#5B3C2F"

function Illustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="480 370 1300 460"
      role="img"
      aria-label="A dazed face inside the zero of 404, with two unplugged cables"
      className={cn("h-auto", className)}
    >
      <defs>
        {/* One "4" (shadow + face), reused for both digits */}
        <g id="four">
          <g transform="translate(22 12)" stroke={TAN} fill="none" strokeWidth="66" strokeLinecap="round" strokeLinejoin="round">
            <path d="M712 432 L716 585 Q717 606 742 604 L872 600" />
            <path d="M830 422 L838 758" />
          </g>
          <g stroke={ORANGE} fill="none" strokeWidth="66" strokeLinecap="round" strokeLinejoin="round">
            <path d="M712 432 L716 585 Q717 606 742 604 L872 600" />
            <path d="M830 422 L838 758" />
          </g>
        </g>

        {/* Plug + cable (left side; mirrored for right) */}
        <g id="plug" stroke={BROWN} strokeLinecap="round" strokeLinejoin="round" fill="none">
          <path d="M555 668 Q592 662 598 696 Q596 724 555 729 Z" fill={TAN} strokeWidth="9" />
          <path d="M514 685 L548 689" strokeWidth="9" />
          <path d="M510 706 L548 710" strokeWidth="9" />
          <path d="M549 662 L545 734" strokeWidth="9" />
          <path d="M600 701 Q660 697 708 685" strokeWidth="9" />
          <path d="M707 670 L711 698" strokeWidth="11" />
          <path d="M502 640 L512 651 L518 646 L528 662" strokeWidth="4" />
        </g>
      </defs>

      {/* Soft backdrop blob */}
      <path
        d="M760 560 Q770 450 900 420 Q1100 400 1250 415 Q1400 430 1420 560 Q1432 700 1300 760 Q1150 800 900 765 Q750 740 760 560 Z"
        fill={BLOB}
      />
      {[
        [909, 461], [915, 538], [782, 540], [764, 674], [902, 700],
        [1211, 437], [1346, 494], [1262, 646], [1347, 669], [1273, 717],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="5" fill="#fff" />
      ))}

      {/* Digits */}
      <use href="#four" />
      <use href="#four" transform="translate(567 0)" />

      {/* Zero with face */}
      <ellipse cx="1094" cy="600" rx="135" ry="200" fill="none" stroke={TAN} strokeWidth="40" />
      <ellipse cx="1080" cy="590" rx="135" ry="200" fill={BLOB} stroke={ORANGE} strokeWidth="40" />

      {/* Hair */}
      <path
        d="M960 575 Q952 460 1012 418 Q1100 385 1165 432 Q1208 490 1197 578 Q1170 520 1100 436 Q1040 470 985 525 Z"
        fill={BROWN}
      />

      {/* Ears */}
      <path d="M962 578 Q950 590 958 612 L976 640 Z" fill={BLOB} stroke={TAN} strokeWidth="4" />
      <path d="M1190 575 Q1210 590 1206 615 L1188 650 Z" fill={BLOB} stroke={TAN} strokeWidth="4" />

      {/* Eyes (X X) */}
      <g stroke={BROWN} strokeWidth="9" strokeLinecap="round">
        <path d="M1013 537 L1033 559 M1033 537 L1013 559" />
        <path d="M1121 537 L1141 559 M1141 537 L1121 559" />
        <path d="M1011 511 L1021 497" strokeWidth="11" />
        <path d="M1116 487 L1135 495" strokeWidth="11" />
      </g>

      {/* Cheeks, nose, mouth */}
      <ellipse cx="1009" cy="599" rx="16" ry="7" fill="#fff" />
      <ellipse cx="1152" cy="599" rx="16" ry="7" fill="#fff" />
      <path d="M1052 632 L1066 638 M1108 633 L1094 638" stroke="#fff" strokeWidth="6" strokeLinecap="round" />
      <ellipse cx="1081" cy="681" rx="20" ry="10" fill={BLOB} stroke={TAN} strokeWidth="6" />

      {/* Speech bubble */}
      <g transform="rotate(-3 1185 680)">
        <ellipse cx="1185" cy="680" rx="64" ry="30" fill="#fff" stroke={TAN} strokeWidth="3" />
        <text
          x="1185"
          y="692"
          textAnchor="middle"
          fontSize="34"
          fill={BROWN}
          letterSpacing="1"
          style={{ fontFamily: "'Patrick Hand', 'Comic Sans MS', ui-rounded, cursive" }}
        >
          ...OOPS
        </text>
      </g>

      {/* Unplugged cables */}
      <use href="#plug" />
      <use href="#plug" transform="translate(2255 0) scale(-1 1)" />
    </svg>
  )
}

export default NotFoundOops