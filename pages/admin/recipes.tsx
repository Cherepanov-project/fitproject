import React from 'react';
import LayoutAdmin, {withLayout} from "../../layouts/Layout-admin";

const Recipes = () => {
    return (
        <div>
            Recipes
        </div>
    );
};

export default withLayout(Recipes);

// Recipes.getLayout = function PageLayout(page) {
// //     return(
// //         <LayoutAdmin>
// //             {page}
// //         </LayoutAdmin>
// //     )
// // };