import { ComponentStory, ComponentMeta } from "@storybook/react"

import ProgressBtn from "../components/ProgressBtn/progressBtn"
import SquareIcon from "../components/SquareIcon/SquareIcon"
import imgCyclist from "../common/images/icons/cyclist.svg"

export default {
    title: "Example/ProgressBtn",
    component: ProgressBtn,
} as ComponentMeta<typeof ProgressBtn>

const Template: ComponentStory<typeof ProgressBtn> = args => (
    <ProgressBtn {...args} />
)

export const Cyclist = Template.bind({})
Cyclist.args = {
    title: "Велосипед",
    subtitle: "10 км",
    target: "50 км",
    ico: <SquareIcon color={"rgba(0, 0, 0, 0)"} img={imgCyclist} />,
}
