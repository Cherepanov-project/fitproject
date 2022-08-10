export function getDishesPerPage() {
  if (typeof window !== "undefined") {
    const { innerWidth } = window
    let dishes = innerWidth < 1260 ? 2 : innerWidth < 1510 ? 4 : 6
    return dishes
  }
}
