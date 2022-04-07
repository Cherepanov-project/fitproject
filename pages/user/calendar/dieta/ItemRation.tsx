import Link from "next/link";
import { DailyRationType } from "../../../../model/dieta/dieta";
import { FC } from "React";
import {
  FoodLink,
  ListItem,
  ItemDiv,
  ButtonMenu,
  DropMenu,
  ButtonDiv,
} from "./stylesDieta";

interface ItemRationProps {
  dietaEl: DailyRationType;
  asPath: string;
  menuClickShow?: (id: string) => void;
}

const ItemRation: FC<ItemRationProps> = ({
  dietaEl,
  asPath,
  menuClickShow,
}) => {
  return (
    <ListItem>
      <ItemDiv>
        <div>{dietaEl.id}</div>
        <div>
          <Link
            href={{
              pathname: `/user/calendar/dietaplan/${dietaEl.food}`,
              query: { url: asPath, eating: dietaEl.id },
            }}
          >
            <FoodLink>{dietaEl.food}</FoodLink>
          </Link>
        </div>
      </ItemDiv>
      <ItemDiv color="#7B809A">{dietaEl.callories}</ItemDiv>
      <ItemDiv color="#7B809A">{dietaEl.natritionValues}</ItemDiv>
      <ButtonDiv>
        <ButtonMenu onClick={() => menuClickShow(dietaEl.id)}>...</ButtonMenu>
        <DropMenu $display={dietaEl.active}>Меню</DropMenu>
      </ButtonDiv>
    </ListItem>
  );
};

export default ItemRation;
