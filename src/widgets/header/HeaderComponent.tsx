import { useThemes } from "~/themes";
import { LogoComponent } from "../logo";
import { IconMenu, IconMoon } from "~/icons";
import { AnimatePresence } from "framer-motion";

// Features.
import HeaderMenu from "./HeaderMenu";
import HeaderOverlay from "./HeaderOverlay";
import HeaderOverlayController from "./HeaderOverlayController";
import ThemeDropdownController from "~/themes/ThemeDropdownController";
import { DropdownComponent } from "../dropdown/DropdownComponent";
import { ThemesMenu } from "~/themes/ThemesMenu";

export default function HeaderComponent({
  className = "",
  ...props
}: React.ComponentPropsWithoutRef<"header">) {
  const { toggleTheme } = useThemes();

  return (
    <HeaderOverlayController>
      {({ isOverlayOpen, setIsOverlayOpen }) => (
        <>
          <header {...props} className={`app-header ${className}`}>
            <div className="app-header__menu">
              <div>
                <button
                  title="Show navigation menu"
                  className="button-transparent"
                  onClick={() => setIsOverlayOpen(!isOverlayOpen)}
                >
                  <IconMenu />
                  <span className="text-menu-md">Menu</span>
                </button>
                <ThemeDropdownController>
                  {({ dropdownRef, isDropdownOpen, toggleDropdown }) => (
                    <>
                      <button
                        title="Toggle theme"
                        onClick={toggleDropdown}
                        className="button-transparent"
                      >
                        <IconMoon />
                      </button>
                      <AnimatePresence>
                        {isDropdownOpen && (
                          <DropdownComponent ref={dropdownRef}>
                            <ThemesMenu />
                          </DropdownComponent>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </ThemeDropdownController>
              </div>
              <div>
                <LogoComponent />
              </div>
            </div>
            <nav className="app-header__nav hidden md:block">
              <HeaderMenu className="justify-center" />
            </nav>
          </header>
          <AnimatePresence>
            {isOverlayOpen && (
              <HeaderOverlay onClose={() => setIsOverlayOpen(false)} />
            )}
          </AnimatePresence>
        </>
      )}
    </HeaderOverlayController>
  );
}
