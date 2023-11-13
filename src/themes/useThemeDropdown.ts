import { useState } from "react";
import { useLocation } from "react-router-dom";
import { usePopupEffect } from "~/utils/hooks/usePopupEvents";

export function useThemeDropdown<Dropdown extends HTMLElement>() {
  const location = useLocation();
  const { ref: dropdownRef } = usePopupEffect<Dropdown>(() =>
    setIsDropdownOpen(false)
  );

  // Initial value is based on the hash itself.
  // This ensures that the dropdown is truly controlled by the URL.
  const isDropdownOpen = location.hash === "#themeDropdown";

  /**
   * Update the URL when the dropdown is opened or closed.
   * This ensures that the dropdown is truly controlled by the URL.
   *
   * @param value Whether the dropdown is open or not.
   */
  function setIsDropdownOpen(value: boolean) {
    if (value) {
      location.hash = "#themeDropdown";
    } else {
      location.hash = "";
    }
  }

  return {
    dropdownRef,
    isDropdownOpen,
    toggleDropdown,
  };
}
