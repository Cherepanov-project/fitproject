import {
  Container,
  ActivContainer,
  Activity,
  ActivHeader,
  ActivTitle,
  ActivSelect,
  DataActivContainer,
  TargetContainer,
  TargetWrapper,
  TargetTitle,
  Target,
  ProgressContainer
} from "./statisticsStyles";
import UserChar from "../../../common/userChar/userChar";
import createIco from "../../../common/squareIcon/squareIcon";
import createRectangleBtn from "../../../common/rectangleBtn/rectangleBtn";
import createProgressBtn from "../../../common/progressBtn/progressBtn";

import imgLeg from "../../../common/images/icons/leg.svg";
import imgWater from "../../../common/images/icons/water.svg";
import imgCyclist from "../../../common/images/icons/cyclist.svg";
import imgRun from "../../../common/images/icons/running.svg";

const icoLeg = createIco("rgba(255, 255, 255, 0.2)", imgLeg);
const icoWater = createIco("rgba(255, 140, 177, 1)", imgWater);
const icoCyclist = createIco("rgba(0, 0, 0, 0)", imgCyclist);
const icoRun = createIco("rgba(0, 0, 0, 0)", imgRun);
const icoLeg2 = createIco("rgba(0, 0, 0, 0)", imgLeg);

const Frame1 = () => {

  return (
    <Container>
      <ActivContainer>
        <Activity>
          <ActivHeader>
            <ActivTitle>Активноcть</ActivTitle>
            <ActivSelect defaultValue="week">
              <option value="week">Неделя</option>
              <option value="Month">Месяц</option>
              <option value="Ear">Год</option>
            </ActivSelect>
          </ActivHeader>
          <UserChar/>
        </Activity>
        <DataActivContainer>
          {createRectangleBtn(
            "Ежедневная ходьба",
            "linear-gradient(180deg, #6D63FF 0%, #3B32C0 100%)",
            icoLeg
          )}
          <TargetContainer>
            {createRectangleBtn("Вода", "rgba(255, 154, 186, 1)", icoWater)}
            <TargetWrapper>
              <TargetTitle>Стаканов:</TargetTitle>
              <Target>4</Target>
            </TargetWrapper>
          </TargetContainer>
        </DataActivContainer>
      </ActivContainer>
      <ProgressContainer>
        {createProgressBtn("Велосипед", "10 км", "50 км", icoCyclist)}
        {createProgressBtn("Бег", "5 км", "7 км/неделя", icoRun)}
        {createProgressBtn("Ходьба", "10 000 шагов", "12 000/неделя", icoLeg2)}
      </ProgressContainer>
    </Container>
  );
};

export default Frame1;
