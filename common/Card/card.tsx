import React, { useState } from "react";

import Typography from '@mui/material/Typography';

import { CardContainer, CardContent } from "./cardStyles";

import { defaultColors, hoverColors } from "../../model/cards/cards";

const Card = ({ name, value, width, height, grow, margin, padding, fontName, fontValue, ...props }) => {

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