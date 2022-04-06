import styled from "styled-components";
import bgWater from "../../../common/images/bgBtnFrame1.svg";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #f1f1f1;
  /* margin-top: 140px; */
`;

export const ActivContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Activity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 664px;
  height: 375px;
  background: linear-gradient(180deg, #6d63ff 0%, #3b32c0 100%);
  border-radius: 10px 40px;

  @media (min-width: 1401px) {
    width: 66%;
  }

  @media (min-width: 2000px) {
    height: 475px;
  }
`;

export const ActivHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ActivTitle = styled.div`
  margin-left: 40px;
  color: #ffffff;
  font-family: Inter;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
`;

export const ActivSelect = styled.select`
  width: 130px;
  height: 44px;
  margin-right: 25px;
  padding: 0 15px;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid #ffffff;
  border-radius: 20px;
`;

export const DataActivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TargetContainer = styled.div`
  height: 222px;
  width: 277px;
  border-radius: 40px;
  background-color: rgba(233, 95, 139, 1);
  background-image: url(${bgWater.src});
  background-repeat: no-repeat;
  background-position: 100% 100%;

  @media (min-width: 2100px) {
      width: 477px;
      height: 280px;
  }
`;

export const TargetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px 20px;
  color: rgba(255, 255, 255, 1);
`;

export const TargetTitle = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
`;

export const Target = styled.div`
  font-weight: 600;
  font-size: 26px;
  line-height: 31px;
`;

export const ProgressContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 80px;

  @media (min-width: 2100px) {
    margin-top: 160px;
  }
`;

