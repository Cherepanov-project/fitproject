import {
  StyledBox,
  StyledContentBox,
  StyledImage,
  StyledTextBox,
  StyledName,
  StyledDescription,
  StyledRating,
} from "./CardDish.styles"
import { FontRoboto } from "@/utils/fonts/fontStyles"
import { Rating } from "@mui/material"
import generateId from "@/utils/generateId"

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
            {styles === null && (
              <StyledDescription style={styles?.StyledDescription}>
                {data.nutritionValue.map((el, ind) => {
                  return (
                    <div key={generateId()}>
                      <p>{el.value}</p>
                      <span>{el.units}</span>
                    </div>
                  )
                })}
              </StyledDescription>
            )}
            <StyledRating>
              <div>30 min cook time</div>
              {styles === null && (
                <Rating
                  name="size-small"
                  value={data.star}
                  readOnly
                  size="small"
                  style={{ color: "#151515", marginTop: "-2px" }}
                />
              )}
            </StyledRating>
          </StyledTextBox>
        </StyledContentBox>
      </StyledBox>
    </>
  )
}

export default CardDishe
