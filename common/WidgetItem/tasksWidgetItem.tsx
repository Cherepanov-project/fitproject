import React from "react";

import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';

import { WidgetItemContainer, WidgetItemContent, CheckboxIcon, CheckedCheckboxIcon, TaskStatus } from "./widgetItemStyles"

const TasksWidgetItem = ({ name, value, padding }): JSX.Element => {

    const colorComputation = (value: string) => {
        const urgentTaskColor = "rgba(254, 196, 0, 1)"
        const newTaskColor = "rgba(41, 204, 151, 1)";
        const defaultColor = "rgba(240, 241, 247, 1)";

        switch (value) {
            case ("Urgent"):
                return urgentTaskColor;
            case ("New"):
                return newTaskColor;
            default:
                return defaultColor;
        }
    };

    return (
        <WidgetItemContainer>
            <WidgetItemContent padding={padding}>
                <FormControlLabel
                    control={
                        <Checkbox
                            disableRipple
                            checkedIcon={< CheckedCheckboxIcon />}
                            icon={<CheckboxIcon />}
                        />
                    }
                    label={<Typography
                        fontFamily="Mulish"
                        fontSize="14px"
                        color="rgba(37, 39, 51, 1)"
                    >{name}</Typography>}
                />
                <TaskStatus color={colorComputation(value)}>
                    <Typography
                        fontFamily="Mulish"
                        fontSize="11px"
                        color="rgba(255, 255, 255, 1)"
                    >{value}</Typography>
                </TaskStatus>
            </WidgetItemContent>
        </WidgetItemContainer>
    )
};

export default TasksWidgetItem;