import { useThemeDropdown } from "./useThemeDropdown";

export default function ThemeDropdownController({
  children,
}: {
  children: (props: {
    isDropdownOpen: boolean;
    toggleDropdown: () => void;
    dropdownRef: React.RefObject<HTMLElement>;
  }) => JSX.Element;
}) {
  return children(useThemeDropdown());
}
