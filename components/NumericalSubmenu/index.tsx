import { Formik } from "formik";
import React, { FC } from "react";
import {
    StyleBlockInputs,
    StyleInput,
    StyleLabelForInput,
    StyleSubmit
} from "@/components/NumericalSubmenu/numericalSubmenu.styles";
import { IProps } from "@/components/NumericalSubmenu/numericalSubmenu.interface";

const NumericalSubmenu: FC<IProps> = ({ subOptions, limitValues: {min, max}, handleFilter }) => {
    return (
        <Formik
            initialValues={{from: subOptions ? subOptions[0] : '', to: subOptions ? subOptions[1] : ''}}
            validate={(values) => {
                if (values.to < values.from) {
                    values.to = values.from
                }
                if (values.to > max || values.to < min) {
                    values.to = max
                }
                if (values.from < min || values.from > max) {
                    values.from = min
                }
                if (values.from > values.to) {
                    values.from = values.to
                }
            }}
            onSubmit={(values) => handleFilter([+values.from, +values.to])}
        >
            {({values, handleBlur, handleChange, handleSubmit}) => (
                <StyleBlockInputs onSubmit={handleSubmit}>
                    <StyleLabelForInput>
                        From
                        <StyleInput placeholder={min.toString()} type="number" name="from"
                                    onChange={handleChange} onBlur={handleBlur} value={values.from}/>
                    </StyleLabelForInput>
                    <StyleLabelForInput>
                        To
                        <StyleInput placeholder={max.toString()} type="number" name="to" onChange={handleChange}
                                    onBlur={handleBlur} value={values.to}/>
                    </StyleLabelForInput>
                    <StyleSubmit type={"submit"}>Filter!</StyleSubmit>
                </StyleBlockInputs>
            )}
        </Formik>
    )
}

export default NumericalSubmenu