export const filtering = (array, filterBy, value) => {
    const val = isNaN(parseInt(value)) ? value : parseInt(value)
    let filter = array.filter(element => {
        return element[filterBy] < val
    })
    return filter
}