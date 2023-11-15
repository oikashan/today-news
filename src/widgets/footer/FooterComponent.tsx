import { NavLink, useNavigate } from "react-router-dom";
import { articleCategoryNavItems } from "~/articles";
import { LogoComponent } from "../logo";
import { WEBSITE } from "~/utils/constants";

export default function FooterComponent({
  className = "",
  ...props
}: React.ComponentPropsWithoutRef<"footer">) {
  const navigate = useNavigate();

  const navItems = [
    {
      id: 0,
      label: "Hey",
      path: "#",
    },
    {
      id: 1,
      label: "There",
      path: "#",
    },
    {
      id: 2,
      label: "Cowboy",
      path: "#",
    },
    {
      id: 3,
      label: "You're",
      path: "#",
    },
    {
      id: 4,
      label: "On",
      path: "#",
    },
    {
      id: 5,
      label: "The",
      path: "#",
    },
    {
      id: 6,
      label: "Wrong",
      path: "#",
    },
    {
      id: 7,
      label: "Page",
      path: "#",
    },
    {
      id: 8,
      label: "Partner",
      path: "#",
    },
    {
      id: 9,
      label: "Giddyup",
      path: "#",
    },
  ];

  const getNavItems = (amount: number) => {
    return amount == -1 ? navItems : navItems.splice(0, amount);
  };

  return (
    <footer {...props} className={`app-footer ${className}`}>
      <div className="app-footer__logo text-menu-sm">
        <LogoComponent />
        {" "}by{" "}
        <a
          href={WEBSITE}
          target="_blank"
          rel="noopener noreferrer"
          className="text-failure"
        >
          Kashan
        </a>
      </div>
      <div className="app-footer__row">
        <div className="app-footer__menus">
          <div className="app-footer__menu">
            <div className="text-menu-sm">News</div>
            <ul>
              {getNavItems(3).map((navItem) => (
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
              {getNavItems(5).map((navItem) => (
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
              {getNavItems(-1).map((navItem) => (
                <li key={navItem.id}>
                  <a href={navItem.path} className="text-body-xs text-contrast">
                    {navItem.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="app-footer__menu newsletter">
          <div className="text-menu-sm">Subscribe</div>
          <div className="text-body-xs">
            Get fresh updates about all things today
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();

              if (
                window.confirm(
                  "Just kidding partner, this is a dummy website. You can visit the about page for more info. Press OK to continue."
                )
              ) {
                navigate("/about");
              }
            }}
          >
            <div className="text-field">
              <input type="text" placeholder="Enter your email" />
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <nav>
        <ul>
          {articleCategoryNavItems.map(({ to, label }, index) => (
            <li key={index}>
              <NavLink to={to} className="nav-link text-menu-sm text-contrast">
                {label}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink
              to="/about"
              className="nav-link text-menu-sm text-contrast"
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
