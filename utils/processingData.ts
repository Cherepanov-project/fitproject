import { sorting } from "@/utils/sorting";
import { filtering } from "@/utils/filtering";

function processingData<T>(array: T[], {filter, sort}): T[] {

    let filteredOptions = Object.entries(filter)
    const mapper = new Map()

    filteredOptions.forEach(([key, values]) => {
        if (typeof values[0] === 'number') {
            mapper.set(key, values)
        } else {
            let subOptions = Object.entries(values)
            let optt = []
            subOptions.forEach(([option, selected]) => {
                if (selected) {
                    optt.push(option.toUpperCase());
                    mapper.set(key, optt)
                }
            })
        }
    })

    const selectedMapper = Object.entries(Object.fromEntries(mapper));

    let filteredArray = filtering(array, selectedMapper)

    let sorted = []
    for (let [key, value] of Object.entries(sort)) {
        sorted = [key, value]
    }
    return sorted.length ? sorting([...filteredArray], sorted[0], sorted[1]) : filteredArray
}

export default processingData