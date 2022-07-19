import { ISidebarMenuItem } from "@/containers/Layout-admin/Sidebar/sidebar.interface"

import {
    imageOverview,
    imageUsers,
    imageRecipies,
    imageMessages,
    imageArticles,
    imageExercises,
    imageSettings,
    imageSubscription,
} from "@/common/images/layoutAdmin/sidebarIcons/index"

/* Если необходимо добавить разделитель
после пункта меню, добавьте ему свойство
lastItem: true
*/
export const sidebarMenu: ISidebarMenuItem[] = [
    {
        id: 1,
        route: "admin/overview",
        name: "overview",
        icon: imageOverview,
    },
    {
        id: 2,
        route: "admin/users",
        name: "users",
        icon: imageUsers,
    },
    {
        id: 3,
        route: "admin/recipes",
        name: "recipes",
        icon: imageRecipies,
    },
    {
        id: 4,
        route: "admin/workouts",
        name: "exercises",
        icon: imageExercises,
    },
    {
        id: 5,
        route: "admin/messages",
        name: "messages",
        icon: imageMessages,
    },
    {
        id: 6,
        route: "admin/articles",
        name: "articles",
        icon: imageArticles,
        lastItem: true,
    },
    {
        id: 7,
        route: "admin/settings",
        name: "settings",
        icon: imageSettings,
    },
    {
        id: 8,
        route: "admin/subscription",
        name: "subscription",
        icon: imageSubscription,
    },
]
