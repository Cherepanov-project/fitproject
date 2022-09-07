import { useEffect } from "react"
import Cookies from "js-cookie"
import { useRouter } from "next/router"

// components
import RectangleButton from "@/components/RectangleBtn/rectangleBtn"
import ProgressButton from "@/components/ProgressBtn/progressBtn"
import SquareIcon from "@/components/SquareIcon/squareIcon"
import UserChar from "@/components/UserChar/userChar"

// containers
import WithRefreshingToken from "@/containers/Layout-user/WithRefreshingToken"
import { WithLayout } from "@/containers/Layout-user/withLayout"

// images
import imgLeg from "@/common/images/icons/leg.svg"
import imgWater from "@/common/images/icons/water.svg"
import imgCyclist from "@/common/images/icons/cyclist.svg"
import imgRun from "@/common/images/icons/running.svg"

// styles
import {
  Container,
  ActiveContainer,
  Activity,
  ActiveHeader,
  ActiveTitle,
  ActiveSelect,
  DataActiveContainer,
  TargetContainer,
  TargetWrapper,
  TargetTitle,
  Target,
  ProgressContainer,
} from "@/components/Statistics/statistics.styles"

// constans
import { ACCESS_TOKEN } from "@/constants/titles"
import { charData } from "@/models/userStatistics/userStatistics"

const Frame1 = () => {
  const router = useRouter()
  const isLogin = Cookies.get(ACCESS_TOKEN) ? true : false

  const stepsPerWeek = charData.reduce(
    (prevValue, currentValue) => prevValue + (currentValue.uv || 0),
    0
  )

  useEffect(() => {
    if (!Cookies.get(ACCESS_TOKEN)) {
      router.push("/user")
    }
  }, [router])

  return isLogin ? (
    <Container>
      <ActiveContainer>
        <Activity>
          <ActiveHeader>
            <ActiveTitle>Activity</ActiveTitle>
            <ActiveSelect defaultValue="Week">
              <option value="week">Week</option>
              <option value="Month">Month</option>
              <option value="Ear">Year</option>
            </ActiveSelect>
          </ActiveHeader>
          <UserChar />
        </Activity>
        <DataActiveContainer>
          <RectangleButton
            text={"Daily walking"}
            bg={"linear-gradient(180deg, #6D63FF 0%, #3B32C0 100%)"}
            ico={<SquareIcon color={"rgba(255, 255, 255, 0.2)"} img={imgLeg} />}
          />

          <TargetContainer>
            <RectangleButton
              text={"Water"}
              bg={"rgba(255, 154, 186, 1)"}
              ico={
                <SquareIcon color={"rgba(255, 140, 177, 1)"} img={imgWater} />
              }
            />
            <TargetWrapper>
              <TargetTitle>Total Glass:</TargetTitle>
              <Target>4</Target>
            </TargetWrapper>
          </TargetContainer>
        </DataActiveContainer>
      </ActiveContainer>
      <ProgressContainer>
        <ProgressButton
          value={(10 / 50) * 100}
          title={"Cycling Hero"}
          subtitle={"10 km"}
          target={"50 km"}
          ico={<SquareIcon color={"rgba(0, 0, 0, 0)"} img={imgCyclist} />}
        />
        <ProgressButton
          value={(5 / 7) * 100}
          title={"Daily Running"}
          subtitle={"5 km"}
          target={"7 km/week"}
          ico={<SquareIcon color={"rgba(0, 0, 0, 0)"} img={imgRun} />}
        />
        <ProgressButton
          value={(stepsPerWeek / 30000) * 100}
          title={"Daily Steps"}
          subtitle={`${stepsPerWeek} steps`}
          target={"30 000  / week"}
          ico={<SquareIcon color={"rgba(0, 0, 0, 0)"} img={imgLeg} />}
        />
      </ProgressContainer>
    </Container>
  ) : (
    <h1>You must be login</h1>
  )
}

export default WithLayout(WithRefreshingToken(Frame1))
