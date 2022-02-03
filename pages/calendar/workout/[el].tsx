import { useRouter } from "next/router";
import CalendarContainer from "../../../common/CalendarContainer";

export default function () {
  const route = useRouter();
  return (
    <CalendarContainer>
      <h1>Отжимания</h1>
    </CalendarContainer>
  );
}
