import { useRouter } from "next/router"
import CalendarContainer from "../../../../components/CalendarContainer"
import HeadLinkBack from "../../../../components/HeadLinkBack"
import { ListUl, ItemDiv, ListItemName } from "./stylesDieta"
import { IDailyRationType, dailyRation } from "../../../../models/dieta/dieta"
import { useState } from "react"
import ItemRation from "./ItemRation"
import { LayoutUser } from "../../../../containers/Layout-user/Layout-user"

const DailyRation = () => {
    const { asPath } = useRouter()
    const [arrDailyRation, setDailyRation] =
        useState<IDailyRationType[]>(dailyRation)

    const menuClickShow = (id: string) => {
        const dailyRationMutation = arrDailyRation.map(item => {
            return {
                ...item,
                active: item.id === id ? !item.active : false,
            }
        })
        setDailyRation(dailyRationMutation)
    }

    const dietaEllement = arrDailyRation.map((el: IDailyRationType) => {
        return (
            <ItemRation
                key={el.id}
                dietaEl={el}
                asPath={asPath}
                menuClickShow={menuClickShow}
            />
        )
    })

    return (
        <CalendarContainer>
            <HeadLinkBack
                namesCompoent={"Ежедневный рацион питания"}
                backLink={"/User/calendar/"}
            />
            <div>
                <ListUl>
                    <ListItemName>
                        <ItemDiv color="#7B809A" fontSize="14px">
                            Рацион
                        </ItemDiv>
                        <ItemDiv color="#7B809A" fontSize="14px">
                            Калории
                        </ItemDiv>
                        <ItemDiv color="#7B809A" fontSize="14px">
                            Пищевая ценность
                        </ItemDiv>
                        <div></div>
                    </ListItemName>
                    {dietaEllement}
                </ListUl>
            </div>
        </CalendarContainer>
    )
}
export default LayoutUser(DailyRation)
