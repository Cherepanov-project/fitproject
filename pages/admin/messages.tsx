import React from 'react';
import LayoutAdmin, {withLayout} from "../../layouts/Layout-admin";

const Messages = () => {
    return (
        <div>
            Messages
        </div>
    );
};

export default withLayout(Messages);

// Messages.getLayout = function PageLayout(page) {
//     return(
//         <LayoutAdmin>
//             {page}
//         </LayoutAdmin>
//     )
// };