import { Variant } from "framer-motion";

export let defaultDelay = 0.5;
export const defaultDuration = 1;

export function getFadeInMotionProps(delay?: number) {
  return {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { delay, duration: getMotionDuration() },
  };
}

export function getMotionDelay() {
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
 * @returns {Record<string, Variant>} The variants.
 */
export function getListMotionVariants(): Record<string, Variant> {
  return {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        when: "beforeChildren",
        duration: getMotionDuration(),
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        duration: getMotionDuration(),
      },
    },
  };
}

/**
 * Returns the framer motion variants for the items of a list.
 * @returns {Record<string, Variant>} The variants.
 */
export function getListItemMotionVariants(): Record<string, Variant> {
  return {
    visible: {
      opacity: 1,
      transition: {
        duration: getMotionDuration(),
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        duration: getMotionDuration(),
      },
    },
  };
}
