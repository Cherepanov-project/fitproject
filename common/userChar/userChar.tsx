import { CharWrapper, LabelChar } from "./userCharStyles";
import { LineChart, Line, CartesianGrid, XAxis, Tooltip } from "recharts";

const UserChar = () => {
    const data = [
        { name: "Вс", uv: 5050 },
        { name: "Пн", uv: 2891 },
        { name: "Вт", uv: 2234 },
        { name: "Ср", uv: 1008 },
        { name: "Чт", uv: 9004 },
        { name: "Пт", uv: 3884 },
        { name: "Сб", uv: 258 },
      ];
    
    return(
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
    )
}

export default UserChar;