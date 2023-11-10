import { useEffect, useRef } from "react";
import { IconClose } from "~/icons";
import HeaderMenu from "./HeaderMenu";
import { motion } from "framer-motion";
import { MotionComponentProps } from "~/utils/types";
import { useDialogEvents } from "~/utils/hooks/useDialogEvents";

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
  const { firstLinkRef, lastLinkRef } = useDialogEvents<
    HTMLButtonElement,
    HTMLAnchorElement
  >(onClose);

  return (
    <motion.div
      {...props}
      id="overlay"
      role="dialog"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`app-header__overlay ${className}`}
    >
      <header className="container">
        <button
          ref={firstLinkRef}
          onClick={onClose}
          title="Close navigation menu"
          className="button-transparent"
        >
          <IconClose />
          <span className="text-menu-md">Close</span>
        </button>
      </header>
      <HeaderMenu
        lastLinkRef={lastLinkRef}
        className="column align-center justify-center"
      />
    </motion.div>
  );
}
