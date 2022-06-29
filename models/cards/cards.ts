interface Colors {
    nameColor: string
    valueColor: string
    borderColor: string
}

const blue = "#3751FF"
const gray = "#9FA2B4"
const black = "#252733"

export const defaultColors: Colors = {
    nameColor: gray,
    valueColor: black,
    borderColor: gray,
}
export const hoverColors: Colors = {
    nameColor: blue,
    valueColor: blue,
    borderColor: blue,
}
