import { RectangleButton, TextWrapper } from "./rectangleBtnStyles"

interface IProps {
    text: string
    bg: string
    ico?: JSX.Element
}

const RectangleBtn = ({ text, bg, ico }: IProps) => {
    return (
        <RectangleButton bg={bg}>
            {ico}
            <TextWrapper>{text}</TextWrapper>
        </RectangleButton>
    )
}

export default RectangleBtn
