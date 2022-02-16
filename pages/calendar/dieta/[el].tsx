import { useRouter } from "next/router";
import CalendarContainer from "../../../common/CalendarContainer";
import HeadLinkBack from "../../../common/HeadLinkBack";
import { ListUl, ItemDiv, ListItemName } from "./stylesDieta";
import { DailyRationType, dailyRation } from "../../../model/dieta/dieta";
import { useState } from "react";
import ItemRation from "./ItemRation";

const DailyRation = () => {
  const { asPath } = useRouter();
  const [arrDailyRation, setDailyRation] =
    useState<DailyRationType[]>(dailyRation);

  const menuClickShow = (id) => {
    setDailyRation((prev) =>
      prev.map((item) => {
        return {
          ...item,
          active: item.id === id ? !item.active : false,
        };
      })
    );
  };

  const dietaEllement = arrDailyRation.map((el: DailyRationType) => {
    return (
      <ItemRation
        key={el.id}
        dietaEl={el}
        asPath={asPath}
        menuClickShow={menuClickShow}
      />
    );
  });

  return (
    <CalendarContainer>
      <HeadLinkBack
        namesCompoent={"Ежедневный рацион питания"}
        backLink={"/calendar/"}
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
  );
};
export default DailyRation;
