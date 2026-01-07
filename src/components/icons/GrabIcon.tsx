import type { SVGProps } from "react";

const GrabIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 16 16"
    {...props}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <circle cx={5.5} cy={2.5} r={0.75} />
      <circle cx={5.5} cy={8} r={0.75} />
      <circle cx={5.5} cy={13.5} r={0.75} />
      <circle cx={10.496} cy={2.5} r={0.75} />
      <circle cx={10.496} cy={8} r={0.75} />
      <circle cx={10.496} cy={13.5} r={0.75} />
    </g>
  </svg>
);

export default GrabIcon;
