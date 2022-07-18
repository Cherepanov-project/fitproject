/*
export const addOnArrResults = (filteredList, list, partOfBody) => {
  filteredList = [
        ...filteredList,
        ...list.filter(element => element.area === partOfBody),
    ]
  console.log(filteredList, "FILL")
}
*/

export const addOnArrResults = (list, partOfBody) => {
   return list.filter(element => element.area === partOfBody)
}
/*
export const filterExerciseList = (filteredList, muscles, list) => {
  addOnArrResults(filteredList, list, "ARMS");
    muscles.Arms ? addOnArrResults(filteredList, list, "ARMS") : null,
    muscles.Legs ? addOnArrResults(filteredList, list, "LEGS") : null,
    muscles.Chest ? addOnArrResults(filteredList, list, "CHEST") : null,
    muscles.Breast ? addOnArrResults(filteredList, list, "BREAST") : null
    console.log(filteredList, "filterExerciseList")
}
*/

export const filterExerciseList = (muscles, list) => {
  let arrResults: any[] = []
  if (muscles.Arms) {
    arrResults = [...arrResults, ...addOnArrResults(list, "ARMS")]
  }
  if (muscles.Legs) {
    arrResults = [...arrResults, ...addOnArrResults(list, "LEGS")]
  }
  if (muscles.Chest) {
    arrResults = [...arrResults, ...addOnArrResults(list, "CHEST")]
  }
  if (muscles.Breast) {
    arrResults = [...arrResults, ...addOnArrResults(list, "BREAST")]
  }
  return arrResults;
}
