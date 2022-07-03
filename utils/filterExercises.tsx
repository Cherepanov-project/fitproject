const addOnArrResults = (filteredList, list, partOfBody) => {
    filteredList = [
        ...filteredList,
        ...list.filter(element => element.muscleGroup === partOfBody),
    ]
}

const filterExerciseList = (filteredList, muscles, list) => {
    muscles.Arms ? addOnArrResults(filteredList, list, "Arms") : null
    muscles.Legs ? addOnArrResults(filteredList, list, "Legs") : null
    muscles.Chest ? addOnArrResults(filteredList, list, "Chest") : null
    muscles.Breast ? addOnArrResults(filteredList, list, "Breast") : null
}

export { addOnArrResults, filterExerciseList }
