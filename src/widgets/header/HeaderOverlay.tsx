import React from "react";
import HeaderMenu from "./HeaderMenu";
import { IconClose } from "~/icons";

/**
 * Overlay for the header to show it's menu on a smaller screen.
 */
export default function HeaderOverlay({
  className = "",
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div {...props} id="overlay" className={`app-header__overlay ${className}`}>
      <header className="container">
        <a
          href="#"
          title="Close navigation menu"
          className="button-transparent"
        >
          <IconClose />
          <span className="text-menu-md">Close</span>
        </a>
      </header>
      <HeaderMenu className="column align-center justify-center" />
    </div>
  );
}
