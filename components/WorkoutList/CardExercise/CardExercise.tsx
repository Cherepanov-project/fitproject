import {
  StyledBox,
  StyledContentBox,
  StyledImage,
  StyledTextBox,
  StyledName,
  StyledReps,
} from "./CardExercise.styles"
import { FontRoboto } from "@/utils/fonts/fontStyles"

const CardExercise = ({ data, styles = null }): JSX.Element => {
  return (
    <>
      <StyledBox style={styles?.StyledBox}>
        <StyledContentBox style={styles?.StyledContentBox}>
          <StyledImage
            imgUrl={data.img}
            imgWidth={data.imgWidth}
            imgHeight={data.imgHeight}
            style={styles?.StyledImage}
          />
          <StyledTextBox style={styles?.StyledTextBox}>
            <FontRoboto />
            <StyledName style={styles?.StyledName}>
              {data.name.toUpperCase()}
            </StyledName>
            <StyledReps
              style={styles?.StyledReps}
            >{`${data.approachCount} X ${data.repeatCount} REPS`}</StyledReps>
          </StyledTextBox>
        </StyledContentBox>
      </StyledBox>
    </>
  )
}

export default CardExercise
