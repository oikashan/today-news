import { IconClose } from "~/icons";
import HeaderMenu from "./HeaderMenu";

type Props = React.ComponentPropsWithoutRef<"div"> & {
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
  return (
    <div {...props} id="overlay" className={`app-header__overlay ${className}`}>
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
    </div>
  );
}
