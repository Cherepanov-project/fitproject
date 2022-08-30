export const sorting = (array, sortby, direction) => {

    const sortedArray = [...array]

    if (sortby === 'name' && direction === 'increase') {
        return sortedArray.sort((a, b) => a[sortby].localeCompare(b[sortby]))
    } else if (sortby === 'name' && direction === 'decrease') {
        return sortedArray.sort((a, b) => a[sortby].localeCompare(b[sortby])).reverse()
    }

    if (direction === 'decrease') {
        return sortedArray.sort((a, b) => {
            return b[sortby] - a[sortby];
        })
    } else if (direction === 'increase') {
        return sortedArray.sort((a, b) => {
            return a[sortby] - b[sortby];
        })
    }
}