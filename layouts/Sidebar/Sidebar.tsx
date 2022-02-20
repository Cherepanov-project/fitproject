import React, {FC, useState} from 'react';
import {IsidebarMenuItem} from "./menu.interface";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";
import {SidebarItem,SidebarHeader,SidebarWrapper,A,ItemName,Ul,Hr} from "./Sidebar.styled";

const sidebarMenuFires: IsidebarMenuItem[] = [
    {route: 'admin/overview', name: 'overview', icon: '/sidebarIcons/statistics.svg', id: 1},
    {route: 'admin/users', name: 'users', icon: '/sidebarIcons/users.svg', id: 2},
    {route: 'admin/recipes', name: 'recipes', icon: '/sidebarIcons/recipies.svg', id: 3},
    {route: 'admin/exercises', name: 'exercises', icon: '/sidebarIcons/articles.svg', id: 4},
    {route: 'admin/messages', name: 'messages', icon: '/sidebarIcons/messages.svg', id: 5},
    {route: 'admin/articles', name: 'articles', icon: '/sidebarIcons/articles.svg', id: 6},
];
const sidebarMenuSecond: IsidebarMenuItem[] = [
    {route: 'admin/settings', name: 'settings', icon: '/sidebarIcons/settings.svg', id: 7},
    {route: 'admin/subscription', name: 'subscription', icon: '/sidebarIcons/subscription.svg', id: 8},
];

const Sidebar: FC = () => {

    console.log('Sidebar');

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
                <A href={`/admin/overview`}>
                    <Image src='/sidebarIcons/logoApp.svg' width='32' height='32' alt='search'/>
                    <ItemName>Dashboard Kit</ItemName>
                </A>
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