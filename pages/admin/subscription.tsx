import React from 'react';
import LayoutAdmin, {withLayout} from "../../layouts/Layout-admin";

const Subscription = () => {
    return (
        <div>
            Subscription
        </div>
    );
};

export default withLayout(Subscription);

// Subscription.getLayout = function PageLayout(page) {
//     return(
//         <LayoutAdmin>
//             {page}
//         </LayoutAdmin>
//     )
// };