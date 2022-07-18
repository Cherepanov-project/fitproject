import { ISidebarMenuItem } from "@/containers/Layout-admin/Sidebar/sidebar.interface"

// import imageOverview from "@/common/images/layoutAdmin/sidebarIcons/statistics.svg"
// import imageUsers from "@/common/images/layoutAdmin/sidebarIcons/statistics.svg"
// import imageRecipies from "@/common/images/layoutAdmin/sidebarIcons/recipies.svg"
// import imageMessages from "@/common/images/layoutAdmin/sidebarIcons/messages.svg"
// import imageArticles from "@/common/images/layoutAdmin/sidebarIcons/articles.svg"
// import imageExercises from "@/common/images/layoutAdmin/sidebarIcons/exercises.svg"
// import imageSettings from "@/common/images/layoutAdmin/sidebarIcons/settings.svg"
// import imageSubscription from "@/common/images/layoutAdmin/sidebarIcons/subscription.svg"

import { imageOverview, imageSubscription, imageSettings, imageRecipies, imageMessages, imageArticles, imageExercises, imageUsers} from "@/common/images/layoutAdmin/sidebarIcons";
/* Если необходимо добавить разделитель
после пункта меню, добавьте ему свойство 
llastItem: true
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
        route: "admin/exercises",
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
