import { forwardRef } from "react";
import { MotionComponentProps } from "~/utils/types";
import { m, LazyMotion, domAnimation } from "framer-motion";

export const DropdownComponent = forwardRef<
  HTMLDivElement,
  MotionComponentProps
>(function ({ children, className = "", ...props }, ref) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div {...props} ref={ref} className={`app-dropdown__menu ${className}`}>
        {children}
      </m.div>
    </LazyMotion>
  );
});
