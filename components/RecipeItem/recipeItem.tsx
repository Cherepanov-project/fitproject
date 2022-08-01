import Link from "next/link"
import { Button } from "@mui/material"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import ColorfulTeg from "../ColorfulTeg"
import { 
    StyledContentWrapper,
    StyledTitle,
    StyledRecipeContainer,
    StyledSecondaryText,
    StyledText,
    StyledRecipeItem,
    StyledRecipeItemContainer
} from "./recipeItem.styles"

const RecipeItem = ({
    status,
    portionSize,
    dataItem,
}) => {
const {products, picUrl, name, description, calorie, protein, fat, carbohydrate} = dataItem;

const productList = products.length ? (products.map(product => {
        return (
            <p>{product} </p>
        )
})) : "no products listed"
const pic = picUrl ? picUrl : "no image uploaded"
    return (
        <StyledContentWrapper>
            <StyledTitle>
              Dish name: {name}
            </StyledTitle>
            <StyledRecipeContainer>
                <StyledSecondaryText>Description:</StyledSecondaryText>
                <StyledText>{description}</StyledText>
            </StyledRecipeContainer>
            <StyledRecipeContainer>
                <StyledSecondaryText>Nutritional info:</StyledSecondaryText>
                <StyledRecipeItemContainer>
                    <StyledRecipeItem>
                        <StyledSecondaryText>calories </StyledSecondaryText>
                        <StyledText>{calorie}</StyledText>
                    </StyledRecipeItem>
                    <StyledRecipeItem>
                        <StyledSecondaryText>carbohydrates </StyledSecondaryText>
                        <StyledText>{carbohydrate}</StyledText>
                    </StyledRecipeItem>
                    <StyledRecipeItem>
                        <StyledSecondaryText>fat </StyledSecondaryText>
                        <StyledText>{fat}</StyledText>
                    </StyledRecipeItem>
                    <StyledRecipeItem>
                        <StyledSecondaryText>protein </StyledSecondaryText>
                        <StyledText>{protein}</StyledText>
                    </StyledRecipeItem>
                </StyledRecipeItemContainer>
            </StyledRecipeContainer>
            <StyledRecipeContainer>
                <StyledSecondaryText>Portion size:</StyledSecondaryText>
                <StyledText>{portionSize}</StyledText>
            </StyledRecipeContainer>
            <StyledRecipeContainer>
                <StyledSecondaryText>Product list: </StyledSecondaryText>
                <StyledText>{productList}</StyledText>
            </StyledRecipeContainer>
            <StyledRecipeContainer>
                <StyledSecondaryText>Picture URL: </StyledSecondaryText>
                <StyledText>{pic}</StyledText>
            </StyledRecipeContainer>
            <StyledRecipeContainer>
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
            </StyledRecipeContainer>
            <Link href={`/admin/recipes`} passHref>
                <Button variant="outlined" startIcon={<ArrowBackIcon />}>
                    Back to recipes
                </Button>
            </Link>
        </StyledContentWrapper>
    )
}

export default RecipeItem
