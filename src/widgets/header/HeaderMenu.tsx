import React from "react";
import { Link } from "react-router-dom";
import { articleCategories } from "~/articles";

/**
 * Menu for the header's navigation items.
 */
export default function HeaderMenu({
  className = "",
  ...props
}: React.ComponentPropsWithoutRef<"ul">) {
  return (
    <ul {...props} className={`flex ${className}`}>
      {articleCategories.map((category, index) => (
        <li key={index}>
          <Link to={`/${category}`} className="text-menu text-contrast">
            {category}
          </Link>
        </li>
      ))}
    </ul>
  );
}
