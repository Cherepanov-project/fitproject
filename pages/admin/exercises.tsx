import React from 'react';
import LayoutAdmin, {withLayout} from "../../layouts/Layout-admin";

const Exercises = () => {
    return (
        <div>
            Exercises
        </div>
    );
};

export default withLayout(Exercises);

// Exercises.getLayout = function PageLayout(page) {
//     return(
//         <LayoutAdmin>
//             {page}
//         </LayoutAdmin>
//     )
// };