function valleys() {
  const uniqueValleys = new Set<string>();
  return {
    createValley(name: string) {
      uniqueValleys.add(name);
    },
    removeValley(name: string) {
      uniqueValleys.delete(name);
    },
    valleys: uniqueValleys,
  };
}
export default valleys();
