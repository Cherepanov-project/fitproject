import styled from "styled-components";
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import dotsImg from "../common/images/icons/3dots.svg";

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

const ProgressBtn = styled.button`
  position: relative;
  height: 237px;
  width: 296px;
  border: none;
  border-radius: 50px;
`;

const IcoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -35px;
  right: 34.5%;
  width: 92px;
  height: 83px;
  background: linear-gradient(180deg, #3f36c6 0%, #4439de 100%);
  border-radius: 20px;
`;

const Dots = styled.div`
  position: absolute;
  top: 25px;
  right: 18px;
  width: 25px;
  height: 25px;
  background-image: url(${dotsImg.src});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  border: none;
`;

const Title = styled.div`
  margin-top: 50px;
  color: rgba(65, 56, 208, 1);
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.005e;
`;

const SubTitle = styled.div`
  color: rgba(120, 120, 120, 1);
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.005em;
`;

const Target = styled.div`
  align-self: start;
  margin-top: 15px;
  color: rgba(120, 120, 120, 1);
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.005em;
  transform: translateX(-50px);
`;
