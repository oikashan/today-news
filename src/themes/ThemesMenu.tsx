import { themes } from "./themes";
import useThemes from "./useThemes";

export function ThemesMenu({
  onClickMenuItem,
}: {
  onClickMenuItem?: () => void;
}) {
  const { switchTheme } = useThemes();

  return (
    <ul>
      {themes.map((theme, i) => (
        <li key={i}>
          <button
            className="button-transparent"
            title={`Switch to ${theme} theme`}
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
