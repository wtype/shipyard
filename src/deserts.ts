function deserts() {
  const uniqueDeserts = new Set<string>();
  return {
    createDesert(name: string) {
      uniqueDeserts.add(name);
    },
    removeDesert(name: string) {
      uniqueDeserts.delete(name);
    },
    deserts: uniqueDeserts,
  };
}
export default deserts();
