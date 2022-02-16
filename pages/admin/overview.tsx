import React from 'react';
import LayoutAdmin, {withLayout} from "../../layouts/Layout-admin";

const Overview = () => {
    return (
        <h1>
            Overview
        </h1>
    );
};

export default withLayout(Overview);

// Overview.getLayout = function PageLayout(page) {
//     return(
//         <LayoutAdmin>
//             {page}
//         </LayoutAdmin>
//     )
// };