import React from "react";

const navItems = [
  {
    id: 0,
    label: "News",
    path: "#",
  },
  {
    id: 1,
    label: "Opinion",
    path: "#",
  },
  {
    id: 2,
    label: "Life",
    path: "#",
  },
  {
    id: 3,
    label: "Business",
    path: "#",
  },
  {
    id: 4,
    label: "Magazine",
    path: "#",
  },
  {
    id: 5,
    label: "Newsletter",
    path: "#",
  },
];

/**
 * Menu for the header's navigation items.
 */
export default function HeaderMenu({
  className = "",
  ...props
}: React.ComponentPropsWithoutRef<"ul">) {
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
