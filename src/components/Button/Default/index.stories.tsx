import {ComponentMeta, ComponentStory} from '@storybook/react';

import Button from './';

export default {
  title: 'Buttons/Button',
  component: Button,
  args: {
    children: 'Button',
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({children, ...args}) => {
  return <Button {...args}>{children}</Button>;
};

export const Primary = Template.bind({});
Primary.args = {
  kind: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  kind: 'secondary',
};

export const Ghost = Template.bind({});
Ghost.args = {
  kind: 'ghost',
};

export const Danger = Template.bind({});
Danger.args = {
  kind: 'danger',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  kind: 'danger',
};

export const Skeleton = Template.bind({});
Skeleton.args = {
  skeleton: true,
};
