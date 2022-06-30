import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import { TooltipProps } from "recharts"
import {
    ValueType,
    NameType,
} from "recharts/src/component/DefaultTooltipContent"

const CustomTooltip = ({
    active,
    payload,
}: TooltipProps<ValueType, NameType>): JSX.Element => {
    if (active) {
        return (
            <Box
                sx={{
                    width: "64px",
                    height: "30px",
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    outline: "1px solid rgba(223, 224, 235, 1)",
                    color: "rgba(37, 39, 51, 1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                }}
            >
                <Typography
                    fontSize="14px"
                    color="#111111"
                >{`${payload?.[0].value}`}</Typography>
            </Box>
        )
    }

    return null
}

export default CustomTooltip
