import { Variant } from "framer-motion";

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
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
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
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: -10,
    },
  };
}
