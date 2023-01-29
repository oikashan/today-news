import React from "react";

const navItems = [
  {
    id: 0,
    label: "quick",
    path: "#",
  },
  {
    id: 1,
    label: "road",
    path: "#",
  },
  {
    id: 2,
    label: "shoe",
    path: "#",
  },
  {
    id: 3,
    label: "why",
    path: "#",
  },
  {
    id: 4,
    label: "triangle",
    path: "#",
  },
  {
    id: 5,
    label: "military",
    path: "#",
  },
  {
    id: 6,
    label: "breathing",
    path: "#",
  },
  {
    id: 7,
    label: "quickly",
    path: "#",
  },
  {
    id: 8,
    label: "excellent",
    path: "#",
  },
  {
    id: 9,
    label: "dropped",
    path: "#",
  },
];

export default function FooterComponent({
  className = "",
  ...props
}: React.ComponentPropsWithoutRef<"footer">) {
  return (
    <footer {...props} className={`app-footer ${className}`}>
      <div className="app-footer__row">
        <div className="app-footer__menus">
          <div className="app-footer__menu">
            <div className="text-menu-sm">News</div>
            <ul>
              {navItems.slice(0, 2).map((navItem) => (
                <li key={navItem.id}>
                  <a href={navItem.path} className="text-body-xs text-contrast">
                    {navItem.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="app-footer__menu">
            <div className="text-menu-sm">Life</div>
            <ul>
              {navItems.slice(0, 6).map((navItem) => (
                <li key={navItem.id}>
                  <a href={navItem.path} className="text-body-xs text-contrast">
                    {navItem.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="app-footer__menu">
            <div className="text-menu-sm">Business</div>
            <ul>
              {navItems.slice(0, 4).map((navItem) => (
                <li key={navItem.id}>
                  <a href={navItem.path} className="text-body-xs text-contrast">
                    {navItem.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="app-footer__menu">
          <div className="text-menu-sm">Subscribe</div>
          <div className="text-body-xs">
            Get fresh updates about the fashion, beauty, and trends
          </div>
          <form>
            <div className="text-field">
              <input type="text" placeholder="Enter your email below" />
              <button type="button">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <nav>
        <ul>
          {navItems.slice(0, 6).map((navItem) => (
            <li key={navItem.id}>
              <a href={navItem.path} className="text-menu-sm text-contrast">
                {navItem.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
