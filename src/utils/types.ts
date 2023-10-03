import { MotionProps } from "framer-motion";

export type Fetchable<T> = {
  data: T;
  status: "loading" | "loaded" | "erred";
};

export type MotionComponentProps = MotionProps & {
  src?: string;
  className?: string;
  children?: React.ReactNode;
};
