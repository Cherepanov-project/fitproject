import {
  StyledBox,
  StyledContentBox,
  StyledImage,
  StyledTextBox,
  StyledName,
  StyledDescription,
  StyledRating,
} from "./CardDishe.styles"
import { FontRoboto } from "@/utils/fonts/fontStyles"
import { Rating } from "@mui/material"

// временная картинка
import DishChickenImg from "@/common/images/dishChickenImg.png"

const CardDishe = ({ data, styles = null }): JSX.Element => {

  return (
    <>
      <StyledBox style={styles?.StyledBox}>
        <StyledContentBox style={styles?.StyledContentBox}>
          <StyledImage style={styles?.StyledImage} src={DishChickenImg.src} />
          <StyledTextBox style={styles?.StyledTextBox}>
            <FontRoboto />
            <StyledName style={styles?.StyledName}>{data.namesFood}</StyledName>
            <StyledDescription>
              <div>
                <p>{data.nutritionValue[0]?.value}</p>
                <span>{data.nutritionValue[0]?.units}</span>
              </div>
              <div>
                <p>{data.nutritionValue[1]?.value}</p>
                <span>{data.nutritionValue[1]?.units}</span>
              </div>
              <div>
                <p>{data.nutritionValue[2]?.value}</p>
                <span>{data.nutritionValue[2]?.units}</span>
              </div>
              <div>
                <p>{data.nutritionValue[3]?.value}</p>
                <span>{data.nutritionValue[3]?.units}</span>
              </div>
            </StyledDescription>
            <StyledRating>
              <div>30 min cook time</div>
              <Rating
                name="size-small"
                value={data.star}
                readOnly
                size="small"
                style={{color: "#151515", marginTop: "-2px"}}
              />
            </StyledRating>
          </StyledTextBox>
        </StyledContentBox>
      </StyledBox>
    </>
  )
}

export default CardDishe
