const checkNameFilter = (str: string): string => {
    if (str.includes(' ')) {
        return str.split(/\s+/).map((word, i) => {
            word = word.toLowerCase()
            if (i === 1) {
                word = word[0].toUpperCase() + word.substring(1)
            }
            return word
        }).join('')
    }
    return str.toLowerCase()
}

export default checkNameFilter