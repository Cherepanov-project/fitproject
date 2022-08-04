import React from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

// models
import { sidebarMenu } from "@/models/admin/layout/sidebarModel"

// icon
import { imageLogoApp } from "@/common/images/layoutAdmin/sidebarIcons"

// styles

import {
    StyleSidebarItem,
    StyleSidebarHeader,
    StyleSidebarWrapper,
    StyleLink,
    StyleItemName,
    StyleMenuList,
    StyleDivider,
} from "@/containers/Layout-admin/Sidebar/sidebar.styles"

const Sidebar = () => {
    const router = useRouter()
    const page = router.asPath.split("/").pop()

    const menuList = sidebarMenu.map(item => {
        return (
            <div key={item.route}>
                <StyleSidebarItem
                    selected={item.name === page}
                >
                    <Link href={`/${item.route}`} passHref>
                        <StyleLink>
                            <Image
                                src={item.icon}
                                width="16"
                                height="16"
                                alt={item.name}
                            />
                            <StyleItemName>{item.name}</StyleItemName>
                        </StyleLink>
                    </Link>
                </StyleSidebarItem>
                {item?.lastItem ? <StyleDivider /> : ""}
            </div>
        )
    })

    return (
        <StyleSidebarWrapper>
            <StyleSidebarHeader>
                <Link href={`/admin/overview`} passHref>
                    <StyleLink>
                        <Image
                            src={imageLogoApp}
                            width={32}
                            height={32}
                            alt="Dashboard Kit"
                        />
                        <StyleItemName>Dashboard Kit</StyleItemName>
                    </StyleLink>
                </Link>
            </StyleSidebarHeader>
            <StyleMenuList>{menuList}</StyleMenuList>
        </StyleSidebarWrapper>
    )
}

export default Sidebar
