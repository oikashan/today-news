import { themes } from "./themes";
import { isTheme, switchTheme } from ".";

export function ThemesMenu({
  className = "",
  onClickMenuItem,
}: {
  className?: string;
  onClickMenuItem?: () => void;
}) {
  return (
    <ul>
      {themes.map((theme, i) => (
        <li key={i}>
          <button
            disabled={isTheme(theme)}
            title={`Switch to ${theme} theme`}
            className={`button-transparent ${className}`}
            onClick={() => {
              switchTheme(theme);
              onClickMenuItem?.();
            }}
          >
            <span className="text-menu-md">{theme}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}
