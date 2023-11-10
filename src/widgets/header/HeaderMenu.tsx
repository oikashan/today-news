import { Link } from "react-router-dom";
import { articleCategoryNavItems } from "~/articles";

type Props = React.ComponentPropsWithoutRef<"ul"> & {
  lastLinkRef?: React.Ref<HTMLAnchorElement>;
};

/**
 * Menu for the header's navigation items.
 */
export default function HeaderMenu({
  className = "",
  lastLinkRef,
  ...props
}: Props) {
  return (
    <ul {...props} className={`flex ${className}`}>
      {articleCategoryNavItems.map(({ to, label }, index) => (
        <li key={index}>
          <Link to={to} className="text-menu text-contrast">
            {label}
          </Link>
        </li>
      ))}
      <li>
        <Link to="/about" ref={lastLinkRef} className="text-menu text-contrast">
          About
        </Link>
      </li>
    </ul>
  );
}
