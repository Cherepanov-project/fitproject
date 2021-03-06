import { useEffect } from "react"
import Cookies from "js-cookie"
import { useRouter } from "next/router"

// components
import RectangleButton from "@/components/RectangleBtn/rectangleBtn"
import ProgressButton from "@/components/ProgressBtn/progressBtn"
import SquareIcon from "@/components/SquareIcon/squareIcon"
import UserChar from "@/components/UserChar/userChar"

// containers
import { LayoutUser } from "@/containers/Layout-user/layoutUser"
import WithRefreshingToken from "@/containers/Layout-user/WithRefreshingToken"

// images
import { imgLeg, imgWater, imgCyclist, imgRun } from "@/common/images/icons"

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

const Frame1 = () => {
    const router = useRouter()
    const isLogin = Cookies.get(ACCESS_TOKEN) ? true : false

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
                        ico={
                            <SquareIcon
                                color={"rgba(255, 255, 255, 0.2)"}
                                img={imgLeg.src}
                            />
                        }
                    />
                    <TargetContainer>
                        <RectangleButton
                            text={"Water"}
                            bg={"rgba(255, 154, 186, 1)"}
                            ico={
                                <SquareIcon
                                    color={"rgba(255, 140, 177, 1)"}
                                    img={imgWater.src}
                                />
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
                    title={"Cycling Hero"}
                    subtitle={"10 km"}
                    target={"50 km"}
                    ico={
                        <SquareIcon
                            color={"rgba(0, 0, 0, 0)"}
                            img={imgCyclist.src}
                        />
                    }
                />
                <ProgressButton
                    title={"Daily Running"}
                    subtitle={"5 km"}
                    target={"7 km/week"}
                    ico={
                        <SquareIcon
                            color={"rgba(0, 0, 0, 0)"}
                            img={imgRun.src}
                        />
                    }
                />
                <ProgressButton
                    title={"Daily Steps"}
                    subtitle={"10 000 steps"}
                    target={"12 000 / week"}
                    ico={
                        <SquareIcon
                            color={"rgba(0, 0, 0, 0)"}
                            img={imgLeg.src}
                        />
                    }
                />
            </ProgressContainer>
        </Container>
    ) : (
        <h1>You must be login</h1>
    )
}

export default WithRefreshingToken(LayoutUser(Frame1))
