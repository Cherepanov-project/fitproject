export const sorting = (array, sortby, direction = 'none', unchangedData) => {
    if (sortby === 'none') {
        return unchangedData;
    }

    if (sortby === 'name' && direction === 'increase') {
        return array.sort((a, b) => a[sortby].localeCompare(b[sortby]))
    } else if (sortby === 'name' && direction === 'decrease') {
        return array.sort((a, b) => a[sortby].localeCompare(b[sortby])).reverse()
    }

    if (direction === 'decrease') {
        return array.sort((a, b) => {
            return b[sortby] - a[sortby];
        })
    } else if (direction === 'increase') {
        return array.sort((a, b) => {
            return a[sortby] - b[sortby];
        });
    }
}