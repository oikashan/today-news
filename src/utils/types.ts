import { MotionProps } from "framer-motion";

export type Fetchable<T> = {
  data: T;
  status: "loading" | "loaded" | "erred";
};

export type MotionComponentProps = MotionProps & {
  className?: string;
  children?: React.ReactNode;
};
