export const addOnArrResults = (list, partOfBody) => {
   return list.filter(element => element.area === partOfBody)
}

export const filterExerciseList = (muscles, list): any[] => {
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
  return arrResults
}
