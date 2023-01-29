import React, { useState } from "react";
import { useThemes } from "~/themes";
import { LogoComponent } from "../logo";
import { IconMenu, IconMoon } from "~/icons";

// Features.
import HeaderMenu from "./HeaderMenu";
import HeaderOverlay from "./HeaderOverlay";

export default function HeaderComponent({
  className = "",
  ...props
}: React.ComponentPropsWithoutRef<"header">) {
  const { toggleTheme } = useThemes();

  return (
    <>
      <header {...props} className={`app-header ${className}`}>
        <div className="app-header__menu">
          <div>
            <a
              href="#overlay"
              title="Show navigation menu"
              className="button-transparent"
            >
              <IconMenu />
              <span className="text-menu-md">Menu</span>
            </a>
            <button
              title="Toggle theme"
              className="button-transparent"
              onClick={() => toggleTheme()}
            >
              <IconMoon />
            </button>
          </div>
          <div>
            <LogoComponent />
          </div>
        </div>
        <nav className="app-header__nav hidden md:block">
          <HeaderMenu className="justify-center" />
        </nav>
        <HeaderOverlay />
      </header>
    </>
  );
}
