export const filtering = (array, filters) => {
    return array.reduce((acc, item) => {
        let isFitArr: boolean[] = []
        filters.forEach(([key, values])=> {
            if (typeof values[0] === 'number') {
                isFitArr.push(item[key] >= values[0] && item[key] <= values[1])
            } else {
                isFitArr.push(values.includes(item[key]))
            }
        })

        if (!isFitArr.includes(false)) {
            acc.push(item);
        }

        return acc;
    }, [])
}