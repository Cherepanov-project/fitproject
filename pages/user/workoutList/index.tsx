import { MainWrapper,
        ItemListWrapper
                        } from "./workoutListStyles";
import Sidebar from "../../../common/workoutList/sidebar/Sidebar"
import { LayoutUser } from "../../../layouts/Layout-user/Layout-user";
import ItemList from "../../../common/workoutList/itemList/ItemList";

const workoutList = () => {

    return (
        <MainWrapper>
            <Sidebar/>
            <ItemListWrapper>
            <ItemList/>
            </ItemListWrapper>
        </MainWrapper>
    )
}

export default LayoutUser(workoutList)