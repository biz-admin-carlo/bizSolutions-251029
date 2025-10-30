import type { CSSProperties, HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  width?: number | string;
  height?: number | string;
  children?: ReactNode;
  style?: CSSProperties;
};

export default function Card({
  width,
  height,
  className = "",
  style,
  children,
  ...rest
}: CardProps) {
  const sizeStyle: CSSProperties = {
    // Make cards fluid by default, constrain with maxWidth when provided
    width: "100%",
    maxWidth:
      width !== undefined
        ? typeof width === "number"
          ? `${width}px`
          : width
        : undefined,
    // Respect requested height as a minimum to allow natural growth
    minHeight:
      height !== undefined
        ? typeof height === "number"
          ? `${height}px`
          : height
        : undefined,
  };

  return (
    <div
      className={`rounded-2xl border-3 border-[#00A7A7] bg-white p-6 pb-[40px] overflow-hidden ${className}`}
      style={{ ...sizeStyle, ...style }}
      {...rest}
    >
      {children}
    </div>
  );
}
