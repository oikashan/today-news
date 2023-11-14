import { Theme } from "~/themes";

export function isObject(value: any): value is object {
  return value && typeof value === "object" && Object.keys(value).length > 0;
}

export function turnOnScroll() {
  document.body.style.overflowY = "auto";
}

export function turnOffScroll() {
  document.body.style.overflowY = "hidden";
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
