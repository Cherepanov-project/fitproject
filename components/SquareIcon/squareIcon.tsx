import { CustomIcon } from "./SquareIconStyles"

interface IProps {
    color: string
    img: { src: string }
}

const SquareIcon = ({ color, img }: IProps) => {
    return <CustomIcon bgColor={color} bgImg={img.src} />
}

export default SquareIcon
