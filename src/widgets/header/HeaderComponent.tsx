import { useThemes } from "~/themes";
import { LogoComponent } from "../logo";
import { IconMenu, IconMoon } from "~/icons";
import { AnimatePresence } from "framer-motion";

// Features.
import HeaderMenu from "./HeaderMenu";
import HeaderOverlay from "./HeaderOverlay";
import HeaderOverlayController from "./HeaderOverlayController";

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
            <HeaderOverlayController>
              {({ isOverlayOpen, setIsOverlayOpen }) => (
                <>
                  <button
                    title="Show navigation menu"
                    className="button-transparent"
                    onClick={() => setIsOverlayOpen(!isOverlayOpen)}
                  >
                    <IconMenu />
                    <span className="text-menu-md">Menu</span>
                  </button>
                  <AnimatePresence>
                    {isOverlayOpen && (
                      <HeaderOverlay onClose={() => setIsOverlayOpen(false)} />
                    )}
                  </AnimatePresence>
                </>
              )}
            </HeaderOverlayController>
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
      </header>
    </>
  );
}
