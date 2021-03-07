export function getTransformToPlayerValues(
  direction: number,
  xDelta: number = 0,
  yDelta: number = 0,
): [number, number] {
  xDelta = direction === 3 ? xDelta : -xDelta;
  yDelta = direction === 0 ? yDelta : -yDelta;

  const transformX = window.innerWidth / 2 + 100 + xDelta;
  const transformY = window.innerHeight / 2 + 130 + yDelta;

  const x =
    direction % 2 === 0 ? 0 : direction === 1 ? -transformX : transformX;
  const y =
    direction % 2 === 1 ? 0 : direction === 0 ? transformY : -transformY;

  return [x, y];
}
