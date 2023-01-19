import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Body1, Body2} from '.';

export default [
  {
    title: 'Typography/Body/Body1',
    component: Body1,
  } as ComponentMeta<typeof Body1>,
  {
    title: 'Typography/Body/Body2',
    component: Body2,
  } as ComponentMeta<typeof Body2>,
];

const Body_1_Template: ComponentStory<typeof Body1> = args => {
  return <Body1 {...args} />;
};

export const Body_1 = Body_1_Template.bind({});
Body_1.args = {
  children: 'Body 1',
};

const Body_2_Template: ComponentStory<typeof Body2> = args => {
  return <Body2 {...args} />;
};

export const Body_2 = Body_2_Template.bind({});
Body_2.args = {
  children: 'Body 2',
};
