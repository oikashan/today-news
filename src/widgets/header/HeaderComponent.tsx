import { useThemes } from "~/themes";
import { LogoComponent } from "../logo";
import { IconMenu, IconMoon } from "~/icons";
import { MotionComponentProps } from "~/utils/Types";
import {
  getFadeInMotionProps,
  getMotionDelay,
  getMotionDuration,
} from "~/utils/functions";
import { AnimatePresence, motion } from "framer-motion";

// Features.
import HeaderMenu from "./HeaderMenu";
import HeaderOverlay from "./HeaderOverlay";
import HeaderOverlayController from "./HeaderOverlayController";

export default function HeaderComponent({
  className = "",
  ...props
}: MotionComponentProps) {
  const { toggleTheme } = useThemes();
  const { delay, getNextDelay } = getMotionDelay();

  return (
    <>
      <motion.header
        {...props}
        className={`app-header ${className}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: getMotionDuration() }}
      >
        <div className="app-header__menu">
          <div>
            <HeaderOverlayController>
              {({ isOverlayOpen, setIsOverlayOpen }) => (
                <>
                  <motion.button
                    title="Show navigation menu"
                    className="button-transparent"
                    {...getFadeInMotionProps(getNextDelay())}
                    onClick={() => setIsOverlayOpen(!isOverlayOpen)}
                  >
                    <IconMenu />
                    <span className="text-menu-md">Menu</span>
                  </motion.button>
                  <AnimatePresence>
                    {isOverlayOpen && (
                      <HeaderOverlay onClose={() => setIsOverlayOpen(false)} />
                    )}
                  </AnimatePresence>
                </>
              )}
            </HeaderOverlayController>
            <motion.button
              title="Toggle theme"
              className="button-transparent"
              onClick={() => toggleTheme()}
              {...getFadeInMotionProps(getNextDelay())}
            >
              <IconMoon />
            </motion.button>
          </div>
          <motion.div {...getFadeInMotionProps(delay)}>
            <LogoComponent />
          </motion.div>
        </div>
        <nav className="app-header__nav hidden md:block">
          <HeaderMenu
            className="justify-center"
            transition={{
              delay: getNextDelay(),
            }}
          />
        </nav>
      </motion.header>
    </>
  );
}
