import styled from "styled-components";
import bgWater from "../../../common/images/bgBtnFrame1.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1068px;
  background-color: #f1f1f1;
`;

export const ActivContainer = styled.div`
  display: flex;
  justify-content: space-around;
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
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid #ffffff;
  border-radius: 20px;
`;

export const DataActivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const WaterContainer = styled.div`
  height: 222px;
  width: 277px;
  border-radius: 40px;
  background-color: rgba(233, 95, 139, 1);
  background-image: url(${bgWater.src});
  background-repeat: no-repeat;
  background-position: 100% 100%;
`;

export const GlassContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px 20px;
  color: rgba(255, 255, 255, 1);
`;

export const WaterTitle = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
`;

export const Glasses = styled.div`
  font-weight: 600;
  font-size: 26px;
  line-height: 31px;
`;

export const ProgressContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 80px;
`;

export const CharWrapper = styled.div`
  position: relative;
  margin-bottom: 50px;
`;

export const LabelChar = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 102%;
  left: -1%;
  top: 100%;
  color: rgba(221, 221, 221, 1);
`;
