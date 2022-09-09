// interfaces
import {ISidebarMenuItem} from "@/containers/Layout-user/Navbar/leftSideBar.interfaces"

// images
import {
    bell,
    clock,
    home,
    message,
    sheet,
} from "@/common/images/layoutUser/navbarIcons"
import {
    IRightSideBarItem,
    RightSideBarIcons,
    RightSideBarIconsBackgroundColor,
    RightSideBarRoutes,
    RightSideBarTitles,
} from "@/containers/Layout-user/Userbar/rightSideBar.interface"

/* Если необходимо добавить разделитель
после пункта меню, добавьте ему свойство
divider: true
*/

// заглушки 1, 4, 5
export const sidebarMenu: ISidebarMenuItem[] = [
    {
        id: 1,
        route: "/user/statistics",
        name: "bell",
        icon: bell,
        divider: true,
    },
    {
        id: 2,
        route: "/user/statistics",
        name: "statistics",
        icon: home,
    },
    {
        id: 3,
        route: "/user/calendar",
        name: "calendar",
        icon: clock,
    },
    {
        id: 4,
        route: "/user/message",
        name: "message",
        icon: message,
    },
    {
        id: 5,
        route: "/user/statistics",
        name: "sheet",
        icon: sheet,
    },
]

export const rightSidebar: IRightSideBarItem[] = [
    {
        text: RightSideBarTitles.Goals,
        src: RightSideBarIcons.Goals,
        route: RightSideBarRoutes.Goals,
        bg: RightSideBarIconsBackgroundColor.Goals,
    },
    {
        text: RightSideBarTitles.Diet,
        src: RightSideBarIcons.Diet,
        route: RightSideBarRoutes.Diet,
        bg: RightSideBarIconsBackgroundColor.Diet,
    },
    {
        text: RightSideBarTitles.Settings,
        src: RightSideBarIcons.Settings,
        route: RightSideBarRoutes.Settings,
        bg: RightSideBarIconsBackgroundColor.Settings,
    },
    {
        text: RightSideBarTitles.Exercises,
        src: RightSideBarIcons.Exercises,
        route: RightSideBarRoutes.Exercises,
        bg: RightSideBarIconsBackgroundColor.Exercises,
    },
]
