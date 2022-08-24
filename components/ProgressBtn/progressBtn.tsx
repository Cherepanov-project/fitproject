import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress"
import { useMediaQuery } from "@material-ui/core"

import { IProps } from "./progressBtn.interface"
import {
  ProgressButton,
  IcoContainer,
  Dots,
  Title,
  SubTitle,
  Target,
  ProgressText,
} from "./progressBtn.styles"

const LinearProgressWithLabel = (
  props: LinearProgressProps & { value: number }
) => {
  const matches = useMediaQuery("(min-width:2400px)")
  const margin = matches ? "50px" : "25px"
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        flexDirection: "column-reverse",
        marginTop: margin,
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
        <ProgressText>Progress</ProgressText>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  )
}

const ProgressBtn = ({ title, subtitle, target, ico, value }: IProps) => {
  return (
    <ProgressButton>
      <IcoContainer>{ico}</IcoContainer>
      <Dots />
      <Title>{title}</Title>
      <SubTitle>{subtitle} / week</SubTitle>
      <LinearProgressWithLabel value={value} />
      <Target>Target: {target}</Target>
    </ProgressButton>
  )
}

export default ProgressBtn
