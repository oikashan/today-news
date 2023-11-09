import React from "react";
import { LogoComponent } from "../logo";

export default function Loader({
  className = "",
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div {...props} className={`app-loader ${className}`}>
      <LogoComponent />
      Loading...
    </div>
  );
}
