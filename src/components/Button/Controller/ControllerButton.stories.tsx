import {ComponentMeta, ComponentStory} from '@storybook/react';

import ControllerButton from './ControllerButton';

export default {
  title: 'Buttons/ControllerButton',
  component: ControllerButton,
  args: {
    buttonDescription: 'Play',
    buttonName: 'A',
  },
} as ComponentMeta<typeof ControllerButton>;

const Template: ComponentStory<typeof ControllerButton> = args => {
  return <ControllerButton {...args} />;
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
