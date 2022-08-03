import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import Cookies from "js-cookie"

// container
import PositionedMenu from "./dashboard"
import SearchAppBar from "./searchInput"

// images
import { imageAdmin } from "@/common/images/layoutAdmin/navbarIcons"

// styles
import {
    NavbarWrapper,
    PageName,
    DivAdmin,
    DivAdminInformation,
    DivInformation,
    StyledSpan,
    StyledLink
} from "./navbar.styles"

const Navbar = () => {
    const router = useRouter()
    
  const page = router.asPath.split("/admin").pop()
  let pageName = page.match("(?<=/).([A-Za-z])*").input.split("/")[1]
  pageName = pageName[0].toUpperCase() + pageName.slice(1)
  
    const [userName, setUserName] = useState("John Doe ") //заглушка 
    const [image, setUserImage] = useState(imageAdmin) //заглушка

    /* закомментировано, тк пока юзеры без ролей + при логине пока только записывается токен

    useEffect(() => {
        const userNameCookies = Cookies.get("username")
        setUserName(userNameCookies)
        const image = Cookies.get("image")
        setUserImage(image)
    }, [])
*/

    return (
        <NavbarWrapper>
            <PageName>{pageName}</PageName>
            <DivAdminInformation>
                <DivInformation>
                    <SearchAppBar />
                    <PositionedMenu />
                </DivInformation>
                <DivAdmin>
                    <Link href={"/"} passHref>
                        <StyledLink>
                            <StyledSpan>{userName}</StyledSpan>
                            <Image
                                src={image}
                                width="40"
                                height="40"
                                alt="search"
                            />
                        </StyledLink>
                    </Link>
                </DivAdmin>
            </DivAdminInformation>
        </NavbarWrapper>
    )
}

const getServerSideProps = async context => {
    console.log(context)
}

export { getServerSideProps, Navbar }
