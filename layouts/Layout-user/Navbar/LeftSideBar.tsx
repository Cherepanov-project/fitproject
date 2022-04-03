import Link from 'next/link';
import Box from '@mui/material/Box';
import { Drawer } from '@mui/material';
import { Sidebar, 
        SidebarWrapper, 
        IconListWrapper,
        TopIconsWrapper,
        BottomIconWrapper,
        Image,
        ImageWrapper,
        Divider
} from "./LeftSideBarStyle"

import bell from "../images/NavBarIcons/bell.svg";
import home from "../images/NavBarIcons/home.svg"; 
import clock from "../images/NavBarIcons/clock.svg"; 
import message from "../images/NavBarIcons/message.svg"; 
import sheet from "../images/NavBarIcons/sheet.svg";
import help from "../images/NavBarIcons/help.svg"; 


const LeftSideBar = () => {



    return(
        <SidebarWrapper>
            <Sidebar>
                <IconListWrapper>
                    <TopIconsWrapper>
                        <Link href="#">
                            <ImageWrapper>
                                <Image src={bell.src} alt="h" />
                            </ImageWrapper>
                        </Link>
                            <Divider/>
                        <Link href="/user/statistics">
                            <ImageWrapper>
                                <Image src={home.src} alt="h" />
                            </ImageWrapper>
                        </Link>
                        <Link href="#">
                            <ImageWrapper>
                                <Image src={clock.src} alt="h" />
                            </ImageWrapper>
                        </Link>
                        <Link href="#">
                            <ImageWrapper>
                                <Image src={message.src} alt="h" />
                            </ImageWrapper>
                        </Link>
                        <Link href="#">
                            <ImageWrapper>
                                <Image src={sheet.src} alt="h" />
                            </ImageWrapper>
                        </Link>
                    </TopIconsWrapper>
                    <BottomIconWrapper>
                        <Link href="#">
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