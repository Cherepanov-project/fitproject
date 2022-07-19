import { ComponentStory, ComponentMeta } from "@storybook/react"

import RectangleBtn from "@/components/RectangleBtn/rectangleBtn"
import SquareIcon from "@/components/SquareIcon/squareIcon"
import imgLeg from "@/common/images/icons/leg.svg"

export default {
    title: "Example/RectangleBtn",
    component: RectangleBtn,
} as ComponentMeta<typeof RectangleBtn>

const Template: ComponentStory<typeof RectangleBtn> = args => (
    <RectangleBtn {...args} />
)

export const Walk = Template.bind({})
Walk.args = {
    text: "Ежедневная ходьба",
    bg: "linear-gradient(180deg, #6D63FF 0%, #3B32C0 100%)",
    ico: <SquareIcon color={"rgba(255, 255, 255, 0.2)"} img={imgLeg} />,
}
