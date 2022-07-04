import { RectangleButton, TextWrapper } from "./rectangleBtn.styles"

interface Props {
    text: string
    bg: string
    ico?: JSX.Element
}

const RectangleBtn = ({ text, bg, ico }: Props) => {
    return (
        <RectangleButton bg={bg}>
            {ico}
            <TextWrapper>{text}</TextWrapper>
        </RectangleButton>
    )
}

export default RectangleBtn