import { NavLink } from "react-router-dom";
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
          <NavLink to={to} className="nav-link text-menu text-contrast">
            {label}
          </NavLink>
        </li>
      ))}
      <li>
        <NavLink
          to="/about"
          ref={lastLinkRef}
          className="nav-link text-menu text-contrast"
        >
          About
        </NavLink>
      </li>
    </ul>
  );
}
