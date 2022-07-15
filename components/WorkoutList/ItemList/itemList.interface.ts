export interface IImg {
    imgUrl: string
    imgWidth: number
    imgHeight: number
}

export interface IMusclesFields {
    Arms: boolean
    Breast: boolean
    Chest: boolean
    Legs: boolean
}

export interface IMuscles {
    muscles: IMusclesFields
}
