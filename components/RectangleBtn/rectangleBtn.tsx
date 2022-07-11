import { RectangleButton, TextWrapper } from "./rectangleBtn.styles"
import { IProps } from "./rectangleBtn.interface"

const RectangleBtn = ({ text, bg, ico }: IProps) => {
    return (
        <RectangleButton bg={bg}>
            {ico}
            <TextWrapper>{text}</TextWrapper>
        </RectangleButton>
    )
}

export default RectangleBtn
