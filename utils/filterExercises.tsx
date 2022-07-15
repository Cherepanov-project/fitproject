export const addOnArrResults = (filteredList, list, partOfBody) => {
    filteredList = [
        ...filteredList,
        ...list.filter(element => element.area === partOfBody),
    ]
    console.log(filteredList, "FILL")
}

export const filterExerciseList = (filteredList, muscles, list) => {
    muscles.Arms ? addOnArrResults(filteredList, list, "ARMS") : null
    muscles.Legs ? addOnArrResults(filteredList, list, "LEGS") : null
    muscles.Chest ? addOnArrResults(filteredList, list, "CHEST") : null
    muscles.Breast ? addOnArrResults(filteredList, list, "BREAST") : null
}
