function getArrPagination<T>(
    pageValue: number,
    visibleEl: number,
    arr: T[]
): T[] {
    const from = pageValue * visibleEl
    const to = pageValue * visibleEl + visibleEl
    return arr.slice(from, to)
}

export default getArrPagination
