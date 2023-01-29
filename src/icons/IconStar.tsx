import React from "react";

export default function IconStar({
  width = 24,
  height = 24,
  ...props
}: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      {...props}
      {...{ width, height }}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2L14.3607 9.26553H22L15.8198 13.7558L18.1806 21.0213L12 16.5311L5.81984 21.0213L8.18058 13.7558L2 9.26553H9.63926L12 2Z"
      />
    </svg>
  );
}
