import React from 'react';
import {withLayout} from "../../layouts/Layout-admin/Layout-admin";
import {RecipiesEditForm} from '../../components/RecipiesEditForm/RecipiesEditForm'

const Recipes = () => {
    return (
        <div>
            <RecipiesEditForm/>
        </div>
    );
};

export default withLayout(Recipes);

