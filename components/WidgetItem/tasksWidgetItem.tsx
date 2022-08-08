import React from "react"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import Typography from "@mui/material/Typography"

import colorComputation from "@/utils/colorComputation"
import {
    WidgetItemContainer,
    WidgetItemContent,
    CheckboxIcon,
    CheckedCheckboxIcon,
    TaskStatus,
    StyledTextStatus,
    StyledTextTask
} from "./widgetItem.styles"

const TasksWidgetItem = ({ name, value, padding }): JSX.Element => {
    return (
        <WidgetItemContainer>
            <WidgetItemContent padding={padding}>
                <FormControlLabel
                    control={
                        <Checkbox
                            disableRipple
                            checkedIcon={<CheckedCheckboxIcon />}
                            icon={<CheckboxIcon />}
                        />
                    }
                    label={
                        <StyledTextTask>
                            {name}
                        </StyledTextTask>
                    }
                />
                <TaskStatus color={colorComputation(value)}>
                    <StyledTextStatus>
                        {value}
                    </StyledTextStatus>
                </TaskStatus>
            </WidgetItemContent>
        </WidgetItemContainer>
    )
}

export default TasksWidgetItem
