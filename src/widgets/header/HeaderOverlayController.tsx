import { useHeaderOverlay } from "./useHeaderOverlay";

export default function HeaderOverlayController({
  children,
}: {
  children: (props: {
    isOverlayOpen: boolean;
    setIsOverlayOpen: (value: boolean) => void;
  }) => JSX.Element;
}) {
  return children(useHeaderOverlay());
}
