import React from "react";
import { Link } from "react-router-dom";

export default function LogoComponent({
  className = "",
  ...props
}: React.ComponentPropsWithoutRef<"a">) {
  return (
    <Link {...props} to="/" className={`app-logo ${className}`}>
      <span>Today</span>
      <img alt="The logo of today" src="/logo.svg" />
    </Link>
  );
}
