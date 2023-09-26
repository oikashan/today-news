import React, { useEffect } from "react";
import { LogoComponent } from "../logo";
import useLoader from "./useLoader";

export default function Loader({
  className = "",
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div {...props} className={`app-loader ${className}`}>
      <LogoComponent />
    </div>
  );
}
