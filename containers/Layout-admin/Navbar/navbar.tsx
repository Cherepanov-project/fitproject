import React, { useState, useEffect } from "react"
import Link from "next/link"
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
    ImageAdmin,
    Anavbar,
} from "./navbar.styles"

const Navbar = () => {
    const router = useRouter()
    
  const page = router.asPath.split("/admin/").pop()
  let pageName = page.match("(?<=/).([A-Za-z])*").input.split("/")[1]
  pageName = pageName[0].toUpperCase() + pageName.slice(1)
  
    const [userName, setUserName] = useState("admin")

    useEffect(() => {
        const userNameCookies = Cookies.get("username")
        setUserName(userNameCookies)
    }, [])

    const image = Cookies.get("image")

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
                        <Anavbar>{userName}</Anavbar>
                    </Link>
                    <ImageAdmin
                        loader={() => image}
                        src={imageAdmin}
                        width="40"
                        height="40"
                        alt="search"
                    />
                </DivAdmin>
            </DivAdminInformation>
        </NavbarWrapper>
    )
}

const getServerSideProps = async context => {
    console.log(context)
}

export { getServerSideProps, Navbar }
