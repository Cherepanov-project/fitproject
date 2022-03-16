import { useRouter } from "next/router";
import CalendarContainer from "../../../common/CalendarContainer";
import HeadLinkBack from "../../../common/HeadLinkBack";
import Dish from "../../../common/dish/Dish";

const FoodDishItem = () => {
  const { query } = useRouter();
  return (
    <CalendarContainer>
      <HeadLinkBack backLink={`${query.url}`} namesCompoent={query.eating} />
      <Dish />
    </CalendarContainer>
  );
};

export default FoodDishItem;
