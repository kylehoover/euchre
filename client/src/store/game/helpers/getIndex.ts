export function getIndex(playerOrder: string[], playerId: string): number {
  for (let i = 0; i < playerOrder.length; i++) {
    if (playerOrder[i] === playerId) {
      return i;
    }
  }

  return -1;
}
