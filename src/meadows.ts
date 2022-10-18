export function meadows() {
  const uniqueMeadows = new Set<string>();
  return {
    createMeadow(name: string) {
      uniqueMeadows.add(name);
    },
    removeMeadow(name: string) {
      uniqueMeadows.delete(name);
    },
    uniqueMeadows,
  };
}
