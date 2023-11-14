import { LogoComponent } from "../logo";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { MotionComponentProps } from "~/utils/types";

export default function Loader({
  className = "",
  ...props
}: MotionComponentProps) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        {...props}
        transition={{ duration: 1 }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className={`app-loader ${className}`}
      >
        <LogoComponent className="neobrutalist:hidden" />
        Loading...
      </m.div>
    </LazyMotion>
  );
}
