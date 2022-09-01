// export const filtering = (array, filterBy, subFilter) => {
//     const val = isNaN(parseInt(subFilter)) ? subFilter : parseInt(subFilter)
//     // if (typeof val === 'string') {
//     //     let filter = array.filter(element => {
//     //         return element[filterBy.toLowerCase()] == val
//     //     })
//     //     return filter
//     // } else {
//         let filter = array.filter(element => {
//             return element[filterBy.toLowerCase()] < val
//         })
//         return filter
//     // }
// }

export const filtering = (array, filter) => {
    const filtersArr = Object.entries(filter)
    if (filtersArr) {
    return array.filter(o =>
        filtersArr.every(([key, values]) => {
            if (typeof values[0] === "string") {
                let newStr = o[key.toLowerCase()][0].toUpperCase() + o[key.toLowerCase()].toLowerCase().slice(1);
                return values.includes(newStr)
            }
            return o[key.toLowerCase()] <= +values[1] && o[key.toLowerCase()] >= +values[0]
        })
    )}
    return array;
}