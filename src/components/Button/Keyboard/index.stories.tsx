import {ComponentMeta, ComponentStory} from '@storybook/react';

import KeyboardButton from './';

export default {
  title: 'Buttons/KeyboardButton',
  component: KeyboardButton,
  args: {
    keyCap: 'Enter',
    alt: '',
    type: 'enter',
  },
} as ComponentMeta<typeof KeyboardButton>;

const Button: ComponentStory<typeof KeyboardButton> = ({children, ...args}) => {
  return <KeyboardButton {...args}>{children}</KeyboardButton>;
};

export const _KeyboardButton = Button.bind({});
_KeyboardButton.args = {};

export const DisabledKeyboardButton = Button.bind({});
DisabledKeyboardButton.args = {
  disabled: true,
};

export const SkeletonKeyboardButton = Button.bind({});
SkeletonKeyboardButton.args = {
  skeleton: true,
};
