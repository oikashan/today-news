/**
 * Provider for the header.
 * @returns Stuff the header needs.
 */
export default function useHeader() {
  const navItems = [
    {
      id: 0,
      label: "News",
      path: "#",
    },
    {
      id: 1,
      label: "Opinion",
      path: "#",
    },
    {
      id: 2,
      label: "Life",
      path: "#",
    },
    {
      id: 3,
      label: "Business",
      path: "#",
    },
    {
      id: 4,
      label: "Magazine",
      path: "#",
    },
    {
      id: 5,
      label: "Newsletter",
      path: "#",
    },
  ];

  return { navItems };
}
