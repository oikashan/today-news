import React from "react";
import { Link } from "react-router-dom";

export default function LogoComponent(
  props: React.ComponentPropsWithoutRef<"a">
) {
  return (
    <Link {...props} to="/" className="app-logo">
      <span>Today</span>
      <img alt="The logo of today" src="/logo.svg" />
    </Link>
  );
}
