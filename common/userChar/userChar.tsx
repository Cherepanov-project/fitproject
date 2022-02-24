import { CharWrapper, LabelChar } from "./userCharStyles";
import { LineChart, Line, CartesianGrid, XAxis, Tooltip } from "recharts";
import { charData } from "../../model/userStatistics";

const UserChar = () => {    

  return(
    <CharWrapper>
      <LineChart width={480} height={200} data={charData}>
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
        {charData.map((e) => {
          return <div key={e.name}>{e.name}</div>;
        })}
      </LabelChar>
    </CharWrapper>
  )
}

export default UserChar;