import { useRouter } from "next/router"
import { useState } from "react"

import ItemRation from "./ItemRation"
import CalendarContainer from "../../../../components/Calendar/calendarContainer"
import HeadLinkBack from "../../../../components/HeadLinkBack/headLinkBack"
import { ListUl, ItemDiv, ListItemName } from "../../../../components/Calendar/calendarContainer.styles"
import { IDailyRationType } from "../../../../models/models.interface"
import { dailyRation } from "../../../../models/dieta/dieta"
import { LayoutUser } from "../../../../containers/Layout-user/layoutUser"

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

    const dietaElement = arrDailyRation.map((el: IDailyRationType) => {
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
                namesComponent={"Ежедневный рацион питания"}
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
                        <div />
                    </ListItemName>
                    {dietaElement}
                </ListUl>
            </div>
        </CalendarContainer>
    )
}
export default LayoutUser(DailyRation)
