import { useThemeDropdown } from "./useThemeDropdown";

export default function ThemeDropdownController({
  children,
}: {
  children: (props: {
    isDropdownOpen: boolean;
    toggleDropdown: () => void;
    dropdownRef: React.RefObject<HTMLDivElement>;
  }) => JSX.Element;
}) {
  return <div className="app-dropdown">{children(useThemeDropdown())}</div>;
}
