export function mountains() {
  const uniqueMountains = new Set<string>();
  return {
    createMountain(name: string) {
      uniqueMountains.add(name);
    },
    removeMountain(name: string) {
      uniqueMountains.delete(name);
    },
    uniqueMountains,
  };
}
