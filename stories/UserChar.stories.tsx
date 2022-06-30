import { ComponentStory, ComponentMeta } from "@storybook/react"

import UserChar from "../components/UserChar/UserChar"

export default {
    title: "Example/UserChar",
    component: UserChar,
} as ComponentMeta<typeof UserChar>

const Template: ComponentStory<typeof UserChar> = () => <UserChar />

export const Primary = Template.bind({})
