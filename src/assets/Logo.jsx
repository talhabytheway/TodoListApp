import * as React from "react";
const SvgComponent = ({ width }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={width}
    viewBox="0 0 512 512"
    fill="none"
  >
    <g clipPath="url(#a)">
      <rect width={512} height={512} fill="#F4F4F4" rx={150} />
      <rect
        width={524.269}
        height={512}
        x={31.3}
        y={190}
        fill="#FF7315"
        rx={94}
        transform="rotate(5.75 31.3 190)"
      />
      <rect
        width={524.269}
        height={512}
        x={8.579}
        y={100.065}
        fill="#FF7315"
        rx={88}
        transform="rotate(7.22 8.579 100.065)"
      />
      <rect
        width={518.578}
        height={512}
        x={-10}
        y={287.231}
        fill="#232020"
        rx={94}
        transform="rotate(-5.387 -10 287.231)"
      />
      <path
        fill="#F4F4F4"
        stroke="#F4F4F4"
        strokeWidth={4}
        d="m222.53 341.281-.001-.001a10.337 10.337 0 0 0-14.58.848l-.002.002-81.172 91.318-36.722-41.31-.022-.025-.023-.024a10.332 10.332 0 0 0-15.438 13.723l.022.025.022.025 44.441 50a10.34 10.34 0 0 0 7.724 3.469 10.33 10.33 0 0 0 7.724-3.469l88.884-100v-.001a10.33 10.33 0 0 0-.857-14.58Z"
      />
    </g>
    <rect
      width={504}
      height={504}
      x={4}
      y={4}
      stroke="#F4F4F4"
      strokeWidth={8}
      rx={146}
    />
    <defs>
      <clipPath id="a">
        <rect width={512} height={512} fill="#fff" rx={150} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgComponent;
