import { IconClose } from "~/icons";
import HeaderMenu from "./HeaderMenu";
import { motion } from "framer-motion";
import { MotionComponentProps } from "~/utils/types";
import { useEffect } from "react";

type Props = MotionComponentProps & {
  onClose: () => void;
  className?: string;
};

/**
 * Overlay for the header to show it's menu on a smaller screen.
 */
export default function HeaderOverlay({
  onClose,
  className = "",
  ...props
}: Props) {
  useEffect(() => {});

  return (
    <motion.div
      {...props}
      id="overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`app-header__overlay ${className}`}
    >
      <header className="container">
        <button
          onClick={onClose}
          title="Close navigation menu"
          className="button-transparent"
        >
          <IconClose />
          <span className="text-menu-md">Close</span>
        </button>
      </header>
      <HeaderMenu className="column align-center justify-center" />
    </motion.div>
  );
}
