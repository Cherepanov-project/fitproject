import Link from "next/link"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import { Rating } from "@mui/material"
import useMediaQuery from "@mui/material/useMediaQuery"

import DishChickenImg from "../../common/images/dishChickenImg.png"
import {
    MenuItemTitle,
    MenuItemDescription,
    MenuRatingWrapper,
    MenuImg,
} from "../../pages/user/listOfDishes/stylesAllMenus"

const MenuItem = ({ namesFood, nutritionalValue, star, id }) => {
    const matches = useMediaQuery("(min-width:2000px")
    return (
        <Link href={`/user/calendar/dieta/${star}`}>
            <Card
                sx={{
                    width: !matches ? 214 : 314,
                    height: !matches ? 196 : 296,
                    margin: 1,
                    marginTop: 10,
                    overflow: "visible",
                    bgColor: "#F0F7FF",
                    cursor: "pointer",
                }}
            >
                <MenuImg src={DishChickenImg.src} />
                <CardContent>
                    <MenuItemTitle>{namesFood}</MenuItemTitle>
                    <MenuItemDescription>
                        <div>
                            <div>{nutritionalValue[0].value}</div>
                            <span>{nutritionalValue[0].units}</span>
                        </div>
                        <div>
                            <div>{nutritionalValue[1].value}</div>
                            <span>{nutritionalValue[1].units}</span>
                        </div>
                        <div>
                            <div>{nutritionalValue[2].value}</div>
                            <span>{nutritionalValue[2].units}</span>
                        </div>
                        <div>
                            <div>{nutritionalValue[3].value}</div>
                            <span>{nutritionalValue[3].units}</span>
                        </div>
                    </MenuItemDescription>
                    <MenuRatingWrapper>
                        <div>30 min cook time</div>
                        <Rating
                            name="size-small"
                            value={star}
                            readOnly
                            size="small"
                        />
                    </MenuRatingWrapper>
                </CardContent>
            </Card>
        </Link>
    )
}
export default MenuItem
