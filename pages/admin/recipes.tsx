import React from 'react';
import LayoutAdmin from "../../layouts/Layout-admin";

const Recipes = () => {
    return (
        <div>
            Recipes
        </div>
    );
};

export default Recipes;

Recipes.getLayout = function PageLayout(page) {
    return(
        <LayoutAdmin>
            {page}
        </LayoutAdmin>
    )
};