import { Link } from "react-router-dom";
import { articleCategoryNavItems } from "~/articles";

/**
 * Menu for the header's navigation items.
 */
export default function HeaderMenu({
  className = "",
  ...props
}: React.ComponentPropsWithoutRef<"ul">) {
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
        <Link to="/about" className="text-menu text-contrast">
          About
        </Link>
      </li>
    </ul>
  );
}
