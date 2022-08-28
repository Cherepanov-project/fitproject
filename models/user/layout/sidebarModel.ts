// interfaces
import { ISidebarMenuItem } from "@/containers/Layout-user/Navbar/leftSideBar.interfaces"

// images
import { bell, sheet, home, message, clock } from "@/common/images/layoutUser/navbarIcons"

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
        divider: true
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
