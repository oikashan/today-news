import { useRef } from "react";
import { IconClose } from "~/icons";
import HeaderMenu from "./HeaderMenu";
import { WEBSITE } from "~/utils/constants";
import { MotionComponentProps } from "~/utils/types";
import { m, LazyMotion, domAnimation } from "framer-motion";
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
  const firstLinkRef = useRef<HTMLButtonElement>(null);
  const lastLinkRef = useRef<HTMLAnchorElement>(null);

  useDialogEvents({
    onClose,
    firstElement: firstLinkRef.current,
    lastElement: lastLinkRef.current,
  });

  return (
    <LazyMotion features={domAnimation}>
      <m.section
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
        <HeaderMenu className="column align-center justify-center" />
        <footer className="container">
          Made by{" "}
          <a href={WEBSITE} ref={lastLinkRef}>
            <strong>Kashan</strong>
          </a>
        </footer>
      </m.section>
    </LazyMotion>
  );
}
