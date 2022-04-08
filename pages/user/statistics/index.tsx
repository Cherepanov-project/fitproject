import {useEffect} from 'react';
import Cookies from 'js-cookie';
import {useRouter} from "next/router";

import UserChar from "../../../common/userChar/userChar";
import SquareIcon from "../../../common/squareIcon/squareIcon";
import RectangleBtn from "../../../common/rectangleBtn/rectangleBtn";
import ProgressBtn from "../../../common/progressBtn/progressBtn";
import imgLeg from "../../../common/images/icons/leg.svg";
import imgWater from "../../../common/images/icons/water.svg";
import imgCyclist from "../../../common/images/icons/cyclist.svg";
import imgRun from "../../../common/images/icons/running.svg";

import {
  Container,
  ActivContainer,
  Activity,
  ActivHeader,
  ActivTitle,
  ActivSelect,
  DataActivContainer,
  TargetContainer,
  TargetWrapper,
  TargetTitle,
  Target,
  ProgressContainer
} from "./statisticsStyles";

const Frame1 = () => {

  const router = useRouter();
  
  useEffect(() => {
    if (!Cookies.get('userToken')){
      setTimeout(()=>{
        router.push('/user');
      },1000)
    }
  }, [router]);

const isLogin = Cookies.get('userToken') ? true : false;

  return isLogin ? (
    <Container>
      <ActivContainer>
        <Activity>
          <ActivHeader>
            <ActivTitle>Активноcть</ActivTitle>
            <ActivSelect defaultValue="week">
              <option value="week">Неделя</option>
              <option value="Month">Месяц</option>
              <option value="Ear">Год</option>
            </ActivSelect>
          </ActivHeader>
          <UserChar/>
        </Activity>
        <DataActivContainer>
          <RectangleBtn
            text = {"Ежедневная ходьба"}
            bg = {"linear-gradient(180deg, #6D63FF 0%, #3B32C0 100%)"}
            ico = {<SquareIcon color = {"rgba(255, 255, 255, 0.2)"} img = {imgLeg.src}/>}/>
          <TargetContainer>
            <RectangleBtn
              text = {"Вода"}
              bg = {"rgba(255, 154, 186, 1)"} 
              ico = {<SquareIcon color = {"rgba(255, 140, 177, 1)"} img = {imgWater.src}/>}/>
            <TargetWrapper>
              <TargetTitle>Стаканов:</TargetTitle>
              <Target>4</Target>
            </TargetWrapper>
          </TargetContainer>
        </DataActivContainer>
      </ActivContainer>
      <ProgressContainer>
        <ProgressBtn 
          title = {"Велосипед"} 
          subtitle = {"10 км"} 
          target = {"50 км"} 
          ico = {<SquareIcon color = {"rgba(0, 0, 0, 0)"} img = {imgCyclist.src}/>}/>
        <ProgressBtn 
          title = {"Бег"} 
          subtitle = {"5 км"} 
          target = {"7 км/неделя"} 
          ico = {<SquareIcon color = {"rgba(0, 0, 0, 0)"} img = {imgRun.src}/>}/>
        <ProgressBtn 
          title = {"Ходьба"} 
          subtitle = {"10 000 шагов"} 
          target = {"12 000 шагов/неделя"} 
          ico = {<SquareIcon color = {"rgba(0, 0, 0, 0)"} img = {imgLeg.src}/>}/>
      </ProgressContainer>
    </Container>
  ) : <h1>You must be login</h1>;
};

export default Frame1;
