import {ProgressBtn, 
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

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
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
        <div>Прогресс</div>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

const createProgressBtn = (
  title: string,
  subtitle: string,
  target: string,
  ico: JSX.Element
) => {
  return (
    <ProgressBtn>
      <IcoContainer>{ico}</IcoContainer>
      <Dots></Dots>
      <Title>{title}</Title>
      <SubTitle>{subtitle}/неделя</SubTitle>
      <LinearProgressWithLabel value={50} />
      <Target>Цель: {target}</Target>
    </ProgressBtn>
  );
};

export default createProgressBtn;