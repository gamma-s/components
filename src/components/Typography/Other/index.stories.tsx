import {ComponentMeta, ComponentStory} from '@storybook/react';

import {ButtonText, CaptionText, OverlineText} from '.';

export default [
  {
    title: 'Typography/Other/ButtonText',
    component: ButtonText,
  } as ComponentMeta<typeof ButtonText>,
  {
    title: 'Typography/Other/CaptionText',
    component: CaptionText,
  } as ComponentMeta<typeof CaptionText>,
  {
    title: 'Typography/Other/OverlineText',
    component: OverlineText,
  } as ComponentMeta<typeof OverlineText>,
];

const ButtonTextTemplate: ComponentStory<typeof ButtonText> = args => {
  return <ButtonText {...args} />;
};

export const Button = ButtonTextTemplate.bind({});
Button.args = {
  children: 'Button text',
};

const CaptionTextTemplate: ComponentStory<typeof CaptionText> = args => {
  return <CaptionText {...args} />;
};

export const Caption = CaptionTextTemplate.bind({});
Caption.args = {
  children: 'Caption text',
};

const OverlineTextTemplate: ComponentStory<typeof OverlineText> = args => {
  return <OverlineText {...args} />;
};

export const Overline = OverlineTextTemplate.bind({});
Overline.args = {
  children: 'Overline text',
};
