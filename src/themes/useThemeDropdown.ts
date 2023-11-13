import { useEffect, useRef, useState } from "react";
import { usePopupEffect } from "~/utils/hooks/usePopupEvents";

export function useThemeDropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { ref: dropdownRef } = usePopupEffect(() => setIsDropdownOpen(false));

  function toggleDropdown() {
    setIsDropdownOpen(!isDropdownOpen);
  }

  return {
    dropdownRef,
    isDropdownOpen,
    toggleDropdown,
  };
}
