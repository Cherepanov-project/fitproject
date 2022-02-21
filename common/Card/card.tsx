import React, { useState } from "react";

import Typography from '@mui/material/Typography';

import { CardContainer, CardContent } from "./cardStyles";

const Card = ({ name, value, width, height, grow, margin, padding, fontName, fontValue, ...props }) => {
    const blue = "#3751FF";
    const gray = "#9FA2B4";
    const black = "#252733";

    const defaultColors = {
        nameColor: gray,
        valueColor: black,
        borderColor: gray,
    };
    const hoverColors = {
        nameColor: blue,
        valueColor: blue,
        borderColor: blue,
    };

    const [colors, setColors] = useState(defaultColors);

    const { nameColor, valueColor, borderColor } = colors;

    return (
        <CardContainer
            width={width}
            height={height}
            margin={margin}
            borderColor={borderColor}
            onMouseOver={() => setColors(hoverColors)}
            onMouseLeave={() => setColors(defaultColors)}
        >
            <CardContent padding={padding}>
                <Typography fontFamily="Mulish" fontSize={fontName} color={nameColor}>{name}</Typography>
                <Typography fontFamily="Mulish" fontSize={fontValue} color={valueColor}>{value}</Typography>
            </CardContent>
        </CardContainer>
    )
};

export default Card;