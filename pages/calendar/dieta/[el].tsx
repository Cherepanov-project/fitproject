import { useRouter } from "next/router";
import CalendarContainer from "../../../common/CalendarContainer";
import Link from "next/link";
import HeadLinkBack from "../../../common/HeadLinkBack";
import {
  FoodLink,
  ListItem,
  ListUl,
  ItemDiv,
  ListItemName,
  ButtonMenu,
  DropMenu,
  ButtonDiv,
} from "./stylesDieta";
import { useState } from "react";

export default function () {
  const { asPath } = useRouter();

  const [arrDietaDays, setDietaDays] = useState([
    {
      id: "Breakfast",
      callories: 1000,
      natritionValues: 1000,
      food: "chiken",
      active: false,
    },
    {
      id: "Morning snack ",
      callories: 1000,
      natritionValues: 1000,
      food: "chiken",
      active: false,
    },
    {
      id: "Lunch",
      callories: 1000,
      natritionValues: 1000,
      food: "chiken",
      active: false,
    },
    {
      id: "Afternoon snack",
      callories: 1000,
      natritionValues: 1000,
      food: "chiken",
      active: false,
    },
    {
      id: "Dinner",
      callories: 1000,
      natritionValues: 1000,
      food: "chiken",
      active: false,
    },
  ]);

  const dietaEllement = arrDietaDays.map((el) => {
    return (
      <ListItem key={el.id}>
        <ItemDiv>
          <div>{el.id}</div>
          <div>
            <Link
              href={{
                pathname: `/calendar/dietaplan/${el.food}`,
                query: { url: asPath, eating: el.id },
              }}
            >
              <FoodLink>{el.food}</FoodLink>
            </Link>
          </div>
        </ItemDiv>
        <ItemDiv color="#7B809A">{el.callories}</ItemDiv>
        <ItemDiv color="#7B809A">{el.natritionValues}</ItemDiv>
        <ButtonDiv>
          <ButtonMenu
            onClick={() =>
              setDietaDays((prev) =>
                prev.map((item) => {
                  return {
                    ...item,
                    active: item.id === el.id ? !item.active : false,
                  };
                })
              )
            }
          >
            ...
          </ButtonMenu>
          <DropMenu $display={el.active}>Меню</DropMenu>
        </ButtonDiv>
      </ListItem>
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
}
