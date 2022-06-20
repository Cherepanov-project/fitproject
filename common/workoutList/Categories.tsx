
import {
    SidebarListTitle, 
    SidebarItemListWrapper, 
    SidebarListWrapper,
    SidebarListItem,
    CategoriesStyledItem} from '../../pages/user/workoutList/workoutListStyles'

import {categoriesList} from '../../model/workout/workout'

import uid from '../../utils/uid'

const Categories = () => {
    const items = categoriesList.map((item) => (
        <SidebarListItem key={uid()}>
            <div>{item.name}</div>
            <CategoriesStyledItem>{item.value}</CategoriesStyledItem>
        </SidebarListItem>
    ))

    return (
        <SidebarListWrapper>
            <SidebarListTitle>Categories</SidebarListTitle>
            <SidebarItemListWrapper>
                {items}
            </SidebarItemListWrapper>
        </SidebarListWrapper>
    )
}

export default Categories
