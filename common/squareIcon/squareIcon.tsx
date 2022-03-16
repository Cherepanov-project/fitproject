import { CustomIcon } from "./squareIconStyles";

interface Props {
  color: string,
  img: { src: string }
}

const SquareIcon = ({color, img}: Props ) => {
  return <CustomIcon bgColor={color} bgImg={img} ></CustomIcon>;
};

export default SquareIcon; 

