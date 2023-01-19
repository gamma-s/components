import {ComponentMeta, ComponentStory} from '@storybook/react';

import AppButton from '.';

export default {
  title: 'Buttons/AppButton',
  component: AppButton,
  args: {
    children: 'A',
  },
} as ComponentMeta<typeof AppButton>;

const Template: ComponentStory<typeof AppButton> = ({children, ...args}) => {
  return <AppButton {...args}>{children}</AppButton>;
};

export const Default = Template.bind({});
Default.args = {
  kind: 'primary',
};

export const Opened = Template.bind({});
Opened.args = {
  opened: true,
};

export const Active = Template.bind({});
Active.args = {
  active: true,
};
