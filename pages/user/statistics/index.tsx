import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

import { LayoutUser } from '../../../layouts/Layout-user/Layout-user';

import UserChar from '../../../common/userChar/userChar';
import SquareIcon from '../../../common/squareIcon/squareIcon';
import RectangleBtn from '../../../common/rectangleBtn/rectangleBtn';
import ProgressBtn from '../../../common/progressBtn/progressBtn';

import imgLeg from '../../../common/images/icons/leg.svg';
import imgWater from '../../../common/images/icons/water.svg';
import imgCyclist from '../../../common/images/icons/cyclist.svg';
import imgRun from '../../../common/images/icons/running.svg';

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
  ProgressContainer,
} from './statisticsStyles';

const Frame1 = () => {
  const router = useRouter();
  const isLogin = Cookies.get('userToken') ? true : false;

  useEffect(() => {
    if (!Cookies.get('userToken')) {
      setTimeout(() => {
        router.push('/user');
      }, 2000);
    }
  }, []);

  return isLogin ? (
    <Container>
      <ActivContainer>
        <Activity>
          <ActivHeader>
            <ActivTitle>Activity</ActivTitle>
            <ActivSelect defaultValue="Week">
              <option value="week">Week</option>
              <option value="Month">Month</option>
              <option value="Ear">Year</option>
            </ActivSelect>
          </ActivHeader>
          <UserChar />
        </Activity>
        <DataActivContainer>
          <RectangleBtn
            text={'Daily walking'}
            bg={'linear-gradient(180deg, #6D63FF 0%, #3B32C0 100%)'}
            ico={<SquareIcon color={'rgba(255, 255, 255, 0.2)'} img={imgLeg.src} />}
          />
          <TargetContainer>
            <RectangleBtn
              text={'Water'}
              bg={'rgba(255, 154, 186, 1)'}
              ico={<SquareIcon color={'rgba(255, 140, 177, 1)'} img={imgWater.src} />}
            />
            <TargetWrapper>
              <TargetTitle>Total Glass:</TargetTitle>
              <Target>4</Target>
            </TargetWrapper>
          </TargetContainer>
        </DataActivContainer>
      </ActivContainer>
      <ProgressContainer>
        <ProgressBtn
          title={'Cycling Hero'}
          subtitle={'10 km'}
          target={'50 km'}
          ico={<SquareIcon color={'rgba(0, 0, 0, 0)'} img={imgCyclist.src} />}
        />
        <ProgressBtn
          title={'Daily Running'}
          subtitle={'5 km'}
          target={'7 km/week'}
          ico={<SquareIcon color={'rgba(0, 0, 0, 0)'} img={imgRun.src} />}
        />
        <ProgressBtn
          title={'Daily Steps'}
          subtitle={'10 000 steps'}
          target={'12 000 / week'}
          ico={<SquareIcon color={'rgba(0, 0, 0, 0)'} img={imgLeg.src} />}
        />
      </ProgressContainer>
    </Container>
  ) : (
    <h1>You must be login</h1>
  );
};

export default LayoutUser(Frame1);
