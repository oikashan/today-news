import { useState } from "react";
import { useLocation } from "react-router-dom";
import { usePopupEvents } from "~/utils/hooks/usePopupEvents";

export function useThemeDropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { ref: dropdownRef } = usePopupEvents(() => setIsDropdownOpen(false));

  function toggleDropdown() {
    setIsDropdownOpen(!isDropdownOpen);
  }

  return {
    dropdownRef,
    isDropdownOpen,
    toggleDropdown,
  };
}
