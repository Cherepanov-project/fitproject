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
} from "./Navbar.styled"

const Navbar = () => {
    const router = useRouter()
    const page = router.asPath.split("/").pop()
    const editRecipie = page.split("-").splice(0, 1)
    const [userName, setUserName] = useState("admin")

    useEffect(() => {
        const userNameCookies = Cookies.get("username")
        setUserName(userNameCookies)
    }, [])

    const image = Cookies.get("image")

    return (
        <NavbarWrapper>
            <PageName>
                {editRecipie[0] === "edit"
                    ? "Edit recipie"
                    : page[0].toUpperCase() + page.slice(1)}
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
