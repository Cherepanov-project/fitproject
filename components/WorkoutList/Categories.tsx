import { categoriesList } from "../../models/workout/workout"
import generateId from "../../utils/generateId"
import {
    SidebarListTitle,
    SidebarItemListWrapper,
    SidebarListWrapper,
    SidebarListItem,
    CategoriesStyledItem,
} from "../../pages/user/workoutList/workoutListStyles"

const Categories = () => {
    const items = categoriesList.map(item => (
        <SidebarListItem key={generateId()}>
            <div>{item.name}</div>
            <CategoriesStyledItem>{item.value}</CategoriesStyledItem>
        </SidebarListItem>
    ))

    return (
        <SidebarListWrapper>
            <SidebarListTitle>Categories</SidebarListTitle>
            <SidebarItemListWrapper>{items}</SidebarItemListWrapper>
        </SidebarListWrapper>
    )
}

export default Categories
