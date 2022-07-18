import Link from "next/link"
import Box from "@mui/material/Box"
import { Drawer } from "@mui/material"

import bell from "@/common/images/layoutUser/navbarIcons/bell.svg"
import home from "@/common/images/layoutUser/navbarIcons/home.svg"
import clock from "@/common/images/layoutUser/navbarIcons/clock.svg"
import message from "@/common/images/layoutUser/navbarIcons/message.svg"
import sheet from "@/common/images/layoutUser/navbarIcons/sheet.svg"
import help from "@/common/images/layoutUser/navbarIcons/help.svg"
import {
    Sidebar,
    SidebarWrapper,
    IconListWrapper,
    TopIconsWrapper,
    BottomIconWrapper,
    Image,
    ImageWrapper,
    Divider,
} from "./leftSideBar.styles"

const LeftSideBar = () => {
    console.log(bell.src)
    return (
        <SidebarWrapper>
            <Sidebar>
                <IconListWrapper>
                    <TopIconsWrapper>
                        <Link href={"#"} passHref>
                            <ImageWrapper>
                                <Image src={bell.src} alt="h" />
                            </ImageWrapper>
                        </Link>
                        <Divider />
                        <Link href={"/user/statistics"} passHref>
                            <ImageWrapper>
                                <Image src={home.src} alt="h" />
                            </ImageWrapper>
                        </Link>
                        <Link href={"/user/calendar"} passHref>
                            <ImageWrapper>
                                <Image src={clock.src} alt="h" />
                            </ImageWrapper>
                        </Link>
                        <Link href={"#"} passHref>
                            <ImageWrapper>
                                <Image src={message.src} alt="h" />
                            </ImageWrapper>
                        </Link>
                        <Link href={"#"} passHref>
                            <ImageWrapper>
                                <Image src={sheet.src} alt="h" />
                            </ImageWrapper>
                        </Link>
                    </TopIconsWrapper>
                    <BottomIconWrapper>
                        <Link href={"#"} passHref>
                            <ImageWrapper>
                                <Image src={help.src} alt="h" />
                            </ImageWrapper>
                        </Link>
                    </BottomIconWrapper>
                </IconListWrapper>
            </Sidebar>
        </SidebarWrapper>
    )
}

export default LeftSideBar
