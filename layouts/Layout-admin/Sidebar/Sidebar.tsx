import React, {FC} from 'react';
import {IsidebarMenuItem} from "./sidebar.interface";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";
// Icons
import imageOverview from '../images/sidebarIcons/statistics.svg'
import imageUsers from '../images/sidebarIcons/users.svg'
import imageRecipies from '../images/sidebarIcons/recipies.svg'
import imageExercises from '../images/sidebarIcons/exercises.svg'
import imageMessages from '../images/sidebarIcons/messages.svg'
import imageArticles from '../images/sidebarIcons/articles.svg'
import imageSettings from '../images/sidebarIcons/settings.svg'
import imageSubscription from '../images/sidebarIcons/subscription.svg'
import imageLogoApp from '../images/sidebarIcons/logoApp.svg'

import {SidebarItem,SidebarHeader,SidebarWrapper,A,ItemName,Ul,Hr} from "./Sidebar.styled";

const sidebarMenuFires: IsidebarMenuItem[] = [
    {route: 'admin/overview', name: 'overview', icon: imageOverview, id: 1},
    {route: 'admin/users', name: 'users', icon: imageUsers, id: 2},
    {route: 'admin/recipes', name: 'recipes', icon: imageRecipies, id: 3},
    {route: 'admin/exercises', name: 'exercises', icon: imageExercises, id: 4},
    {route: 'admin/messages', name: 'messages', icon: imageMessages, id: 5},
    {route: 'admin/articles', name: 'articles', icon: imageArticles, id: 6},
];
const sidebarMenuSecond: IsidebarMenuItem[] = [
    {route: 'admin/settings', name: 'settings', icon: imageSettings, id: 7},
    {route: 'admin/subscription', name: 'subscription', icon: imageSubscription, id: 8},
];

const Sidebar = () => {

    const router = useRouter();
    const page = router.asPath.split('/').pop();

    const firstLavel = () => {
        return (
            <>
                {sidebarMenuFires.map(menu => (
                    <SidebarItem key={menu.route} selected={menu.name === page}>
                        <Link href={`/${menu.route}`}><A>
                            <Image src={menu.icon} width='16' height='16' alt='search'/>
                            <ItemName>{menu.name}</ItemName>
                        </A></Link>
                    </SidebarItem>
                ))}
            </>
        )
    };

    const secondLavel = () => {
        return (
            <>
                {sidebarMenuSecond.map(menu => (
                    <SidebarItem key={menu.name} selected={menu.name === page}>
                        <Link href={`/${menu.route}`}><A>
                            <Image src={menu.icon} width='16' height='16' alt='search'/>
                            <ItemName>{menu.name}</ItemName>
                        </A></Link>
                    </SidebarItem>
                ))}
            </>
        )
    };

    return (
        <SidebarWrapper>
            <SidebarHeader>
                <Link href={`/admin/overview`}><A>
                    <Image src={imageLogoApp} width='32' height='32' alt='search'/>
                    <ItemName>Dashboard Kit</ItemName>
                </A></Link>
            </SidebarHeader>
            <Ul>
                {firstLavel()}
                <Hr/>
                {secondLavel()}
            </Ul>
        </SidebarWrapper>
    );
};

export default Sidebar;