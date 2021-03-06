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
    const page = router.asPath.split("/").pop()
    const editRecipie = page.split("-").splice(0, 1)
    const [userName, setUserName] = useState("admin")

    useEffect(() => {
        const userNameCookies = Cookies.get("username")
        setUserName(userNameCookies)
    }, [])

    const image = Cookies.get("image")
    const recipePage = router.asPath.includes("/admin/recipes/") ? `Recipe id ` : null;
    const workoutPage = router.asPath.includes("/admin/workouts/") ? `Workout id ` : null;
    return (
        <NavbarWrapper>
            <PageName>
                {workoutPage}
                {recipePage}
                {editRecipie[0] === "edit"
                    ? "Edit recipe"
                    : page[0].toUpperCase() + page.slice(1)}
            </PageName>
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
