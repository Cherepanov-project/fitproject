import { useRouter } from "next/router";
import CalendarContainer from "../../../common/CalendarContainer";

export default function () {
  const route = useRouter();
  return (
    <CalendarContainer>
      <h1>Брокали</h1>
    </CalendarContainer>
  );
}
