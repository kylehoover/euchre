/**
 * Get a random integer between the two numbers (inclusive)
 *
 * @param min Min number (inclusive)
 * @param max Max number (inclusive)
 */
export function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}
