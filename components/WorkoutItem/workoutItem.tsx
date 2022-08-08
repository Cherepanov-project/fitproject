import Link from "next/link"
import { Button } from "@mui/material"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import ColorfulTeg from "../ColorfulTeg"

import { 
    StyledContentWrapper,
    StyledTitle,
    StyledWorkoutContainer,
    StyledSecondaryText,
    StyledText,

} from "./workoutItem.styles"

const WorkoutItem = ({
    status,
    dataItem
}) => {
const {name, area, category, muscleGroups, repeatCount, approachCount} = dataItem;
const muscles = muscleGroups.length ? (muscleGroups.map((el, index) => {
    return (
        <StyledText key={index}>{el}</StyledText>
    )
})) : "no muscle groups listed"


    return (
        <StyledContentWrapper>
            <StyledTitle>Workout name: {name}</StyledTitle>
            <StyledWorkoutContainer>
                <StyledSecondaryText>Area:</StyledSecondaryText>
                <StyledText>{area}</StyledText>
            </StyledWorkoutContainer>
            <StyledWorkoutContainer>
                <StyledSecondaryText>Category:</StyledSecondaryText>
                <StyledText>{category}</StyledText>
            </StyledWorkoutContainer>
            <StyledWorkoutContainer>
                <StyledSecondaryText>Muscle groups:</StyledSecondaryText>
                <div>{muscles}</div>
            </StyledWorkoutContainer>
            <StyledWorkoutContainer>
                <StyledSecondaryText>Repeat count:</StyledSecondaryText>
                <StyledText>{repeatCount}</StyledText>
            </StyledWorkoutContainer>
            <StyledWorkoutContainer>
                <StyledSecondaryText>Approach count:</StyledSecondaryText>
                <StyledText>{approachCount}</StyledText>
            </StyledWorkoutContainer>
            <StyledWorkoutContainer>
            <StyledSecondaryText>Status:</StyledSecondaryText>
                {status === "HIGH" ? (
                    <ColorfulTeg text={status} backgroundColor="#F12B2C" />
                ) : status === "LOW" ? (
                    <ColorfulTeg
                        text={status}
                        backgroundColor="#FEC400
                    "
                    />
                ) : (
                    <ColorfulTeg
                        text={status}
                        backgroundColor="#29CC97
                "
                    />
                )}
            </StyledWorkoutContainer>
            <Link href={`/admin/workouts`} passHref>
                <Button variant="outlined" startIcon={<ArrowBackIcon />}>
                    Back to workouts
                </Button>
            </Link>
        </StyledContentWrapper>
    )
}

export default WorkoutItem
