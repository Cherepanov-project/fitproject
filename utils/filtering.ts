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

export const filtering = (array, {filter, sort}) => {
    let filteredOptions = new Map();
    let arrayOpt = [];

    for (let key in filter) {
        for (let options in filter[key]) {
            if (filter[key][options]) {
                arrayOpt.push(options.toUpperCase());
                filteredOptions.set(key.toLowerCase(), arrayOpt)
            }
        }
    }

    if (filteredOptions.size) {
        return array.filter(item => {
            return [...filteredOptions].every(([key, values]) => {
                    return values.includes(item[key])
                }
            )
        })
    }

    return array;


    // const filtered = array.filter(o => {
    //     filterArr.every(([key, values]) => {
    //         o[]
    //     })
    // })
    // if (filtersArr) {
    // return array.filter(o =>
    //     filtersArr.every(([key, values]) => {
    //         if (o[key.toLowerCase()]) {
    //
    //         }
    //         // return o[key.toLowerCase()]  <= +values[1] && o[key.toLowerCase()] >= +values[0]
    //     })
    // )}

    // const filteredValues = filtersArr.filter(([key, values]) => Object.entries(values).includes(true, 1))

    // array.filter((item) => {
        // console.log(item)
    // })
    // const filterValues = filtersArr.filter(([key, values]) => {
    //     const valuesArr = Object.entries(values);
    //
    // })
    // console.log(filtersArr);
    // const gavno = array.filter(o => {
    //     filtersArr.every(([key, values]) => {
    //         let filtredValues = Object.keys(values).filter((el) => values[el])
    //         let valuesToUpperCase = filtredValues.map((el) => el.toUpperCase());
    //         // console.log(valuesToUpperCase.includes(o[key.toLowerCase()]));
    //         return valuesToUpperCase.includes(o[key.toLowerCase()])
    //     })
    // })

    // return gavno
}