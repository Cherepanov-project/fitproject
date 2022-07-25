import { CustomIcon } from "./squareIcon.styles"
import { IProps } from "./squareIcon.interface"

const SquareIcon = ({ color, img }: IProps) => {
    return <CustomIcon bgColor={color} bgImg={img?.src} />
}

export default SquareIcon
