import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import LinearProgress, {
    LinearProgressProps,
} from "@mui/material/LinearProgress"

import { IProps } from "./progressBtn.interface"
import {
    ProgressButton,
    IcoContainer,
    Dots,
    Title,
    SubTitle,
    Target,
} from "./progressBtn.styles"

const LinearProgressWithLabel = (
    props: LinearProgressProps & { value: number }
) => {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                flexDirection: "column-reverse",
                marginTop: "25px",
            }}
        >
            <Box sx={{ width: "84%", mr: 1 }}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "10px",
                    width: "84%",
                    minWidth: 35,
                }}
            >
                <div>Progress</div>
                <Typography
                    variant="body2"
                    color="text.secondary"
                >{`${Math.round(props.value)}%`}</Typography>
            </Box>
        </Box>
    )
}

const ProgressBtn = ({ title, subtitle, target, ico }: IProps) => {
    return (
        <ProgressButton>
            <IcoContainer>{ico}</IcoContainer>
            <Dots />
            <Title>{title}</Title>
            <SubTitle>{subtitle} / week</SubTitle>
            <LinearProgressWithLabel value={50} />
            <Target>Target: {target}</Target>
        </ProgressButton>
    )
}

export default ProgressBtn
