import { LogoComponent } from "../logo";
import { IconBulb, IconMenu } from "~/icons";
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
  return (
    <HeaderOverlayController>
      {({ isOverlayOpen, setIsOverlayOpen }) => (
        <>
          <header {...props} className={`app-header ${className}`}>
            {/* Menu */}
            <div className="app-header__menu">
              <div>
                <button
                  title="Show navigation menu"
                  className="button-transparent"
                  onClick={() => setIsOverlayOpen(!isOverlayOpen)}
                >
                  <IconMenu />
                  <span className="text-menu-md neobrutalist:hidden">Menu</span>
                </button>
                <ThemeDropdownController>
                  {({ isDropdownOpen, toggleDropdown }) => (
                    <>
                      <button
                        title="Toggle theme"
                        onClick={toggleDropdown}
                        className="button-transparent"
                      >
                        <IconBulb />
                      </button>
                      <AnimatePresence>
                        {isDropdownOpen && (
                          <DropdownComponent>
                            <ThemesMenu
                              className="app-dropdown__item"
                              onClickMenuItem={toggleDropdown}
                            />
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
            <nav className="app-header__nav hidden lg:block">
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
