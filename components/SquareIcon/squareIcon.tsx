import { CustomIcon } from "./squareIcon.styles"

interface IProps {
    color: string
    img: { src: string }
}

const SquareIcon = ({ color, img }: IProps) => {
    return <CustomIcon bgColor={color} bgImg={img.src} />
}

export default SquareIcon
