import { ComponentStory, ComponentMeta } from '@storybook/react';

import SquareIcon from '../common/squareIcon/squareIcon';
import imgWater from "../common/images/icons/water.svg";

export default {
      title: 'Example/SquareIcon',
      component: SquareIcon,
    } as ComponentMeta<typeof SquareIcon>;
    
const Template: ComponentStory<typeof SquareIcon> = (args) => <SquareIcon {...args} />;

export const Water = Template.bind({});
Water.args = {
      color: "rgba(255, 140, 177, 1)", 
      img: imgWater,
};




