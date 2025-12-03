import React from "react";

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number | string;
  color?: string;
  title?: string;
};

export const StarIcon: React.FC<Props> = ({
  size = 7,
  color = "#F66D00",
  title,
  className,
  ...props
}) => {
  const id = title
    ? `staricon-${Math.random().toString(36).slice(2, 9)}`
    : undefined;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 7 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-labelledby={id}
      role={title ? "img" : "img"}
      {...props}
    >
      {title ? <title id={id}>{title}</title> : null}
      <path
        d="M3.76562 6.35938H2.4375L2.5625 4.10938L0.671875 5.34375L0 4.20312L2.01562 3.1875L0 2.15625L0.671875 1.01562L2.5625 2.25L2.4375 0H3.76562L3.64062 2.25L5.53125 1.01562L6.1875 2.15625L4.1875 3.1875L6.1875 4.20312L5.53125 5.34375L3.64062 4.10938L3.76562 6.35938Z"
        fill={color}
      />
    </svg>
  );
};
