import { ComponentStory, ComponentMeta } from "@storybook/react"

import ColorfulTeg from "../components/ColorfulTeg"

export default {
    title: "Example/ColorfulTeg",
    component: ColorfulTeg,
} as ComponentMeta<typeof ColorfulTeg>

const Template: ComponentStory<typeof ColorfulTeg> = args => (
    <ColorfulTeg {...args} />
)

export const Admin = Template.bind({})

Admin.args = {
    text: "Admin",
}
