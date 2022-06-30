interface IColors {
    nameColor: string
    valueColor: string
    borderColor: string
}

const blue = "#3751FF"
const gray = "#9FA2B4"
const black = "#252733"

const defaultColors: IColors = {
    nameColor: gray,
    valueColor: black,
    borderColor: gray,
}
const hoverColors: IColors = {
    nameColor: blue,
    valueColor: blue,
    borderColor: blue,
}

export { defaultColors, hoverColors }
