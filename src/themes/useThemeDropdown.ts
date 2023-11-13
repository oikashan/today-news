import { useState } from "react";
import { usePopupEffect } from "~/utils/hooks/usePopupEvents";

export function useThemeDropdown<Dropdown extends HTMLElement>() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { ref: dropdownRef } = usePopupEffect<Dropdown>(() =>
    setIsDropdownOpen(false)
  );

  function toggleDropdown() {
    setIsDropdownOpen(!isDropdownOpen);
  }

  return {
    dropdownRef,
    isDropdownOpen,
    toggleDropdown,
  };
}
