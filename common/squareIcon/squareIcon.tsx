import { CustomIcon } from "./squareIconStyles";

const createIco = (color: string, img: { src: string }) => {
  return <CustomIcon bgColor={color} bgImg={img.src}></CustomIcon>;
};

export default createIco;

