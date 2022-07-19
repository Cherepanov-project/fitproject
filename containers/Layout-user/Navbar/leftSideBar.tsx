import Link from "next/link"
import {useRouter} from "next/router";
import Image from "next/image"
import Box from "@mui/material/Box"
import { Drawer } from "@mui/material"

// styles
import {
    Sidebar,
    SidebarWrapper,
    IconListWrapper,
    TopIconsWrapper,
    BottomIconWrapper,

    ImageWrapper,
    Divider,
} from "./leftSideBar.styles"

// models
import { sidebarMenu } from "@/models/user/layout/sidebarModel"

// images
import help from "@/common/images/layoutUser/navbarIcons/help.svg"

const LeftSideBar = () => {

    const router = useRouter()
    const page = router.asPath.split("/").pop()

    const menuList = sidebarMenu.map(item => {
        return (
            <>
                <Link href={item.route} passHref>
                    <ImageWrapper selected={item.name === page}>
                        <Image src={item.icon} alt={item.name} width="22px"
                               height="22px"/>
                    </ImageWrapper>
                </Link>
                {item?.divider ? <Divider /> : ""}
            </>
        )
    })
    return (
        <SidebarWrapper>
            <Sidebar>
                <IconListWrapper>
                    <TopIconsWrapper>
                        {menuList}
                    </TopIconsWrapper>
                    <BottomIconWrapper>
                        <Link href={"#"} passHref>
                            <ImageWrapper selected={'help' === page} >
                                <Image src={help.src} alt="h" width="24"
                                       height="24"/>
                            </ImageWrapper>
                        </Link>
                    </BottomIconWrapper>
                </IconListWrapper>
            </Sidebar>
        </SidebarWrapper>
    )
}

export default LeftSideBar
