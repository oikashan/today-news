export type Fetchable<T> = {
  data: T;
  status: "loading" | "loaded" | "erred";
};
