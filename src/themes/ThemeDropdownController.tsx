import { useThemeDropdown } from "./useThemeDropdown";

export default function ThemeDropdownController({
  children,
}: {
  children: (props: {
    isDropdownOpen: boolean;
    toggleDropdown: () => void;
  }) => JSX.Element;
}) {
  const { dropdownRef, ...props } = useThemeDropdown();

  return (
    <div ref={dropdownRef} className="app-dropdown">
      {children(props)}
    </div>
  );
}
