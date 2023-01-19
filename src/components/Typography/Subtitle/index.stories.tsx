import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Subtitle1, Subtitle2} from '.';

export default [
  {
    title: 'Typography/Body/Subtitle1',
    component: Subtitle1,
  } as ComponentMeta<typeof Subtitle1>,
  {
    title: 'Typography/Body/Subtitle2',
    component: Subtitle2,
  } as ComponentMeta<typeof Subtitle2>,
];

const Subtitle_1_Template: ComponentStory<typeof Subtitle1> = args => {
  return <Subtitle1 {...args} />;
};

export const Subtitle_1 = Subtitle_1_Template.bind({});
Subtitle_1.args = {
  children: 'Subtitle 1',
};

const Subtitle_2_Template: ComponentStory<typeof Subtitle2> = args => {
  return <Subtitle2 {...args} />;
};

export const Body_2 = Subtitle_2_Template.bind({});
Body_2.args = {
  children: 'Subtitle 2',
};
