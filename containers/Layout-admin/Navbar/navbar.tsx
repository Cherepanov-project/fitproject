import React, { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import Cookies from "js-cookie"

import PositionedMenu from "./dashboard"
import SearchAppBar from "./searchInput"
import imageAdmin from "../../../common/images/layoutAdmin/navbarIcons/photo_admin.png"
import {
    NavbarWrapper,
    PageName,
    DivAdmin,
    DivAdminInformation,
    DivInformation,
    ImageAdmin,
    Anavbar,
} from "./navbar.styles"

function getPageName(relPath: string): string{
    let pathParts = relPath.split("/")
    const page = pathParts.pop()
    const prePage = pathParts.pop()
    const editRecipie = page.split("-").splice(0, 1)
    if(editRecipie[0] === "edit"){
        return "Edit recipe"
    }
    else if(prePage==='chat'){
        return ""
    }
    else {
        return page[0].toUpperCase() + page.slice(1)
    } 
}

const Navbar = () => {
    const [userName, setUserName] = useState("admin")

    useEffect(() => {
        const userNameCookies = Cookies.get("username")
        setUserName(userNameCookies)
    }, [])

    const image = Cookies.get("image")

    return (
        <NavbarWrapper>
            <PageName>
                {getPageName(useRouter().asPath)}
            </PageName>
            <DivAdminInformation>
                <DivInformation>
                    <SearchAppBar />
                    <PositionedMenu />
                </DivInformation>
                <DivAdmin>
                    <Link href={"/"}>
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
