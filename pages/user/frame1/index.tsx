import {
  Container,
  ActivContainer,
  Activity,
  ActivHeader,
  ActivTitle,
  ActivSelect,
  DataActivContainer,
  WaterContainer,
  GlassContainer,
  WaterTitle,
  Glasses,
  ProgressContainer,
  CharWrapper,
  LabelChar,
} from "./frame1Styles";
import createIco from "../../../common/squareIcon";
import createRectangleBtn from "../../../common/rectangleBtn";
import createProgressBtn from "../../../common/progressBtn";
import { LineChart, Line, CartesianGrid, XAxis, Tooltip } from "recharts";

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
  const data = [
    { name: "Вс", uv: 5050 },
    { name: "Пн", uv: 2891 },
    { name: "Вт", uv: 2234 },
    { name: "Ср", uv: 1008 },
    { name: "Чт", uv: 9004 },
    { name: "Пт", uv: 3884 },
    { name: "Сб", uv: 258 },
  ];

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
          <CharWrapper>
            <LineChart width={480} height={200} data={data}>
              <Tooltip
                filterNull={false}
                itemStyle={{ color: "rgba(255, 255, 255, 1)" }}
                wrapperStyle={{ color: "rgba(255, 255, 255, 1)" }}
                contentStyle={{
                  background: "rgba(233, 95, 139, 1)",
                  border: "none",
                }}
                labelStyle={{ color: "rgba(255, 255, 255, 1)" }}
              />
              <CartesianGrid strokeDasharray="5 0" horizontal={false} />
              <XAxis dataKey="name" hide />
              <Line
                type="monotone"
                name="Шаги:"
                strokeWidth={5}
                dataKey="uv"
                dot={{ stroke: "rgba(233, 95, 139, 1)", r: 5 }}
                activeDot={{ stroke: "rgba(255, 255, 255, 1)", r: 3 }}
                stroke="rgba(233, 95, 139, 1)"
              />
            </LineChart>
            <LabelChar>
              {data.map((e) => {
                return <div key={e.name}>{e.name}</div>;
              })}
            </LabelChar>
          </CharWrapper>
        </Activity>
        <DataActivContainer>
          {createRectangleBtn(
            "Ежедневная ходьба",
            "linear-gradient(180deg, #6D63FF 0%, #3B32C0 100%)",
            icoLeg
          )}
          <WaterContainer>
            {createRectangleBtn("Вода", "rgba(255, 154, 186, 1)", icoWater)}
            <GlassContainer>
              <WaterTitle>Стаканов:</WaterTitle>
              <Glasses>4</Glasses>
            </GlassContainer>
          </WaterContainer>
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
