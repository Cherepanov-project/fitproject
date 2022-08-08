export const filtering = (array, filterBy, value) => {
    const val = isNaN(parseInt(value)) ? value : parseInt(value)
    if (typeof val === 'string') {
        let filter = array.filter(element => {
            return element[filterBy] == val
        })
        return filter
    } else {
        let filter = array.filter(element => {
            return element[filterBy] < val
        })
        return filter
    }
}