import {ComponentMeta, ComponentStory} from '@storybook/react';

import TabButton from './TabButton';

export default {
  title: 'Buttons/TabButton',
  component: TabButton,
  args: {button: {url: 'www.google.com', title: 'Google', id: 1}},
} as ComponentMeta<typeof TabButton>;

const Template: ComponentStory<typeof TabButton> = args => {
  return <TabButton {...args} />;
};

export const Default = Template.bind({});
Default.args = {};

export const Skeleton = Template.bind({});
Skeleton.args = {
  skeleton: true,
};
