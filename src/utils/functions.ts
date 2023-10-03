import { AnimationProps, Variant, TargetAndTransition } from "framer-motion";

export let defaultDelay = 0.5;
export const defaultDuration = 1;

export function isObject(value: any): value is object {
  return value && typeof value === "object" && Object.keys(value).length > 0;
}

export function getFadeInMotionProps({
  initial,
  animate,
  transition,
}: {
  initial?: AnimationProps["initial"];
  animate?: AnimationProps["animate"];
  transition?: AnimationProps["transition"];
} = {}) {
  return {
    initial: { ...(isObject(initial) ? initial : {}), opacity: 0 },
    animate: { ...(isObject(animate) ? animate : {}), opacity: 1 },
    transition: {
      ...(isObject(transition) ? transition : {}),
      duration: getMotionDuration(),
    },
  };
}

export function getMotionDelay() {
  defaultDelay = 0.5;

  return {
    delay: defaultDelay,
    getNextDelay: () => {
      defaultDelay = defaultDelay + 0.5;
      return defaultDelay;
    },
  };
}

export function getMotionDuration(): number {
  return defaultDuration;
}

/**
 * Shuffles array in place. ES6 version
 * @param {Array} array items An array containing the items.
 * @returns {Array} The shuffled array
 */
export function getShuffled<T>(array: T[]): T[] {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

/**
 * Returns the framer motion variants for a list of items.
 */
export function getListMotionVariants({
  initial,
  animate,
  transition,
}: {
  initial?: TargetAndTransition;
  animate?: TargetAndTransition;
  transition?: TargetAndTransition["transition"];
}) {
  return {
    initial: "hidden",
    animate: "visible",
    variants: {
      visible: {
        ...(isObject(animate) ? animate : {}),
        opacity: 1,
        transition: {
          ...transition,
          staggerChildren: 0.3,
          when: "beforeChildren",
          duration: getMotionDuration(),
        },
      },
      hidden: {
        ...(isObject(initial) ? initial : {}),
        opacity: 0,
        transition: {
          when: "afterChildren",
          duration: getMotionDuration(),
        },
      },
    },
  };
}

/**
 * Returns the framer motion variants for the items of a list.
 */
export function getListItemMotionVariants({
  initial,
  animate,
  transition,
}: {
  initial?: TargetAndTransition;
  animate?: TargetAndTransition;
  transition?: TargetAndTransition["transition"];
}) {
  return {
    variants: {
      visible: {
        ...(isObject(animate) ? animate : {}),
        opacity: 1,
        transition: {
          ...transition,
          duration: getMotionDuration(),
        },
      },
      hidden: {
        ...(isObject(initial) ? initial : {}),
        opacity: 0,
        transition: {
          duration: getMotionDuration(),
        },
      },
    },
  };
}
