import React, { FC } from "react"

import {
    ComposedChart,
    Area,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Line,
} from "recharts"

import CustomTooltip from "./CustomTooltip/CustomTooltip"

import { graphData } from "../../model/graph/graph"

const Graph: FC = () => {
    return (
        <ComposedChart id="graph" width={686} height={386} data={graphData}>
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3751FF" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#3751FF" stopOpacity={0} />
                </linearGradient>
            </defs>
            <Area
                type="monotone"
                dataKey="uv"
                name=" "
                stroke="#3751FF"
                dot={false}
                strokeWidth={2}
                fill="url(#colorUv)"
            />
            <Line
                type="monotone"
                name=" "
                dataKey="pv"
                stroke="#DFE0EB"
                dot={false}
                activeDot={false}
                strokeWidth={2}
            />
            <CartesianGrid
                vertical={false}
                stroke="#ccc"
                strokeDasharray="5 0"
            />
            <XAxis dataKey="name" tickLine={false} />
            <YAxis
                orientation="right"
                tickCount={7}
                mirror={true}
                axisLine={false}
                tick={{ dy: -15 }}
                tickLine={false}
            />
            <Tooltip content={<CustomTooltip />} offset={-36} />
        </ComposedChart>
    )
}

export default Graph
