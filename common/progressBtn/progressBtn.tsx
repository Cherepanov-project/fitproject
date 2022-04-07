import {ProgressButton, 
        IcoContainer,
        Dots,
        Title,
        SubTitle,
        Target} from './progressBtnStyles'
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { JSXElementConstructor } from 'react';

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
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
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

interface Props {
  title: string,
  subtitle: string,
  target: string,
  ico: JSX.Element  
}

const ProgressBtn = ({
  title,
  subtitle,
  target,
  ico
}: Props) => {
  return (
    <ProgressButton>
      <IcoContainer>{ico}</IcoContainer>
      <Dots></Dots>
      <Title>{title}</Title>
      <SubTitle>{subtitle} / week</SubTitle>
      <LinearProgressWithLabel value={50} />
      <Target>Target: {target}</Target>
    </ProgressButton>
  );
};

export default ProgressBtn;