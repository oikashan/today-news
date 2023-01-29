import React from "react";
import useHeader from "./useHeader";

/**
 * Menu for the header's navigation items.
 */
export default function HeaderMenu({
  className = "",
  ...props
}: React.ComponentPropsWithoutRef<"ul">) {
  const { navItems } = useHeader();

  return (
    <ul {...props} className={`flex ${className}`}>
      {navItems.map((navItem) => (
        <li key={navItem.id}>
          <a href={navItem.path} className="text-menu text-contrast">
            {navItem.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
