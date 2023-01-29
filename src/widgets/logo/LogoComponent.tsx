import React from "react";

export default function LogoComponent(
  props: React.ComponentPropsWithoutRef<"a">
) {
  return (
    <a {...props} href="#" className="app-logo">
      <img alt="The logo of today" src="/logo.svg" />
    </a>
  );
}
