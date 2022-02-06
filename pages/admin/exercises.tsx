import React from 'react';
import LayoutAdmin from "../../layouts/Layout-admin";

const Exercises = () => {
    return (
        <div>
            Exercises
        </div>
    );
};

export default Exercises;

Exercises.getLayout = function PageLayout(page) {
    return(
        <LayoutAdmin>
            {page}
        </LayoutAdmin>
    )
};