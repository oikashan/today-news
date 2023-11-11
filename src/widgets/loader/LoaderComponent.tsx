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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`app-loader ${className}`}
      >
        <LogoComponent />
        Loading...
      </m.div>
    </LazyMotion>
  );
}
