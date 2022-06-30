import React from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

import imageOverview from "../../../common/images/layoutAdmin/sidebarIcons/statistics.svg"
import imageUsers from "../../../common/images/layoutAdmin/sidebarIcons/users.svg"
import imageRecipies from "../../../common/images/layoutAdmin/sidebarIcons/recipies.svg"
import imageExercises from "../../../common/images/layoutAdmin/sidebarIcons/exercises.svg"
import imageMessages from "../../../common/images/layoutAdmin/sidebarIcons/messages.svg"
import imageArticles from "../../../common/images/layoutAdmin/sidebarIcons/articles.svg"
import imageSettings from "../../../common/images/layoutAdmin/sidebarIcons/settings.svg"
import imageSubscription from "../../../common/images/layoutAdmin/sidebarIcons/subscription.svg"
import imageLogoApp from "../../../common/images/layoutAdmin/sidebarIcons/logoApp.svg"
import {
    SidebarItem,
    SidebarHeader,
    SidebarWrapper,
    AAA,
    ItemName,
    Ul,
    Hr,
} from "./sidebar.styles"

export interface ISidebarMenuItem {
    route: string
    name: string
    icon: string
    id: number
}

const sidebarMenuFires: ISidebarMenuItem[] = [
    { route: "admin/overview", name: "overview", icon: imageOverview, id: 1 },
    { route: "admin/users", name: "users", icon: imageUsers, id: 2 },
    { route: "admin/recipes", name: "recipes", icon: imageRecipies, id: 3 },
    {
        route: "admin/Exercises",
        name: "exercises",
        icon: imageExercises,
        id: 4,
    },
    { route: "admin/messages", name: "messages", icon: imageMessages, id: 5 },
    { route: "admin/articles", name: "articles", icon: imageArticles, id: 6 },
]
const sidebarMenuSecond: ISidebarMenuItem[] = [
    { route: "admin/settings", name: "settings", icon: imageSettings, id: 7 },
    {
        route: "admin/subscription",
        name: "subscription",
        icon: imageSubscription,
        id: 8,
    },
]

const Sidebar = () => {
    const router = useRouter()
    const page = router.asPath.split("/").pop()

    const firstLevel = () => {
        return (
            <>
                {sidebarMenuFires.map(menu => (
                    <SidebarItem key={menu.route} selected={menu.name === page}>
                        <Link href={`/${menu.route}`}>
                            <AAA>
                                <Image
                                    src={menu.icon}
                                    width="16"
                                    height="16"
                                    alt="search"
                                />
                                <ItemName>{menu.name}</ItemName>
                            </AAA>
                        </Link>
                    </SidebarItem>
                ))}
            </>
        )
    }

    const secondLevel = () => {
        return (
            <>
                {sidebarMenuSecond.map(menu => (
                    <SidebarItem key={menu.name} selected={menu.name === page}>
                        <Link href={`/${menu.route}`}>
                            <AAA>
                                <Image
                                    src={menu.icon}
                                    width="16"
                                    height="16"
                                    alt="search"
                                />
                                <ItemName>{menu.name}</ItemName>
                            </AAA>
                        </Link>
                    </SidebarItem>
                ))}
            </>
        )
    }

    return (
        <SidebarWrapper>
            <SidebarHeader>
                <Link href={`/admin/overview`}>
                    <AAA>
                        <Image
                            src={imageLogoApp}
                            width="32"
                            height="32"
                            alt="search"
                        />
                        <ItemName>Dashboard Kit</ItemName>
                    </AAA>
                </Link>
            </SidebarHeader>
            <Ul>
                {firstLevel()}
                <Hr />
                {secondLevel()}
            </Ul>
        </SidebarWrapper>
    )
}

export default Sidebar
