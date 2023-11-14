import { useState } from "react";
import { useLocation } from "react-router-dom";
import { usePopupEvents } from "~/utils/hooks/usePopupEvents";

export function useThemeDropdown<Dropdown extends HTMLElement>() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { ref: dropdownRef } = usePopupEvents<Dropdown>(() =>
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
