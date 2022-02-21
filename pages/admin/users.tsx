import React from 'react';
import LayoutAdmin, {withLayout} from "../../layouts/Layout-admin/Layout-admin";

const Users = () => {
    return (
        <div>
            Users
        </div>
    );
};

export default withLayout(Users);

// Users.getLayout = function PageLayout(page) {
//     return(
//         <LayoutAdmin>
//             {page}
//         </LayoutAdmin>
//     )
// };