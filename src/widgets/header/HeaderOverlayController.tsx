import { useState } from "react";

export default function HeaderOverlayController({
  children,
}: {
  children: (props: {
    isOverlayOpen: boolean;
    setIsOverlayOpen: (value: boolean) => void;
  }) => JSX.Element;
}) {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  return children({ isOverlayOpen, setIsOverlayOpen });
}
