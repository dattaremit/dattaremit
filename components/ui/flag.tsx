// Tiny inline SVG flags rendered inside a circular mask. Recognizable rather
// than pixel-accurate — they sit at ~16px next to a currency code.
export type FlagCode = "us" | "in" | "ph" | "vn" | "id" | "ng";

function UsFlag() {
  return (
    <svg viewBox="0 0 26 14" className="size-full" preserveAspectRatio="xMidYMid slice">
      <rect width="26" height="14" fill="#B22234" />
      {[1, 3, 5, 7, 9, 11, 13].map((y) => (
        <rect key={y} y={y} width="26" height="1" fill="#ffffff" />
      ))}
      <rect width="11" height="7" fill="#3C3B6E" />
    </svg>
  );
}

function InFlag() {
  return (
    <svg viewBox="0 0 18 12" className="size-full" preserveAspectRatio="xMidYMid slice">
      <rect width="18" height="4" fill="#FF9933" />
      <rect y="4" width="18" height="4" fill="#ffffff" />
      <rect y="8" width="18" height="4" fill="#138808" />
      <circle cx="9" cy="6" r="1.4" fill="none" stroke="#000088" strokeWidth="0.35" />
    </svg>
  );
}

function PhFlag() {
  return (
    <svg viewBox="0 0 18 12" className="size-full" preserveAspectRatio="xMidYMid slice">
      <rect width="18" height="6" fill="#0038A8" />
      <rect y="6" width="18" height="6" fill="#CE1126" />
      <polygon points="0,0 8,6 0,12" fill="#ffffff" />
      <circle cx="2.4" cy="6" r="1.3" fill="#FCD116" />
    </svg>
  );
}

function VnFlag() {
  return (
    <svg viewBox="0 0 18 12" className="size-full" preserveAspectRatio="xMidYMid slice">
      <rect width="18" height="12" fill="#DA251D" />
      <polygon
        points="9,3 9.9,5.6 12.6,5.6 10.4,7.2 11.2,9.8 9,8.2 6.8,9.8 7.6,7.2 5.4,5.6 8.1,5.6"
        fill="#FFFF00"
      />
    </svg>
  );
}

function IdFlag() {
  return (
    <svg viewBox="0 0 18 12" className="size-full" preserveAspectRatio="xMidYMid slice">
      <rect width="18" height="6" fill="#CE1126" />
      <rect y="6" width="18" height="6" fill="#ffffff" />
    </svg>
  );
}

function NgFlag() {
  return (
    <svg viewBox="0 0 18 12" className="size-full" preserveAspectRatio="xMidYMid slice">
      <rect width="6" height="12" fill="#008751" />
      <rect x="6" width="6" height="12" fill="#ffffff" />
      <rect x="12" width="6" height="12" fill="#008751" />
    </svg>
  );
}

const FLAGS: Record<FlagCode, () => React.JSX.Element> = {
  us: UsFlag,
  in: InFlag,
  ph: PhFlag,
  vn: VnFlag,
  id: IdFlag,
  ng: NgFlag,
};

export function Flag({ code, className = "size-4" }: { code: FlagCode; className?: string }) {
  const FlagSvg = FLAGS[code];
  return (
    <span
      aria-hidden
      className={`${className} rounded-full overflow-hidden inline-block ring-1 ring-border shrink-0`}
    >
      <FlagSvg />
    </span>
  );
}
