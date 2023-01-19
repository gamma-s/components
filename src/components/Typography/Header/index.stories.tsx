import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Header1, Header2, Header3, Header4, Header5, Header6} from '.';

export default [
  {
    title: 'Typography/Header/Header1',
    component: Header1,
  } as ComponentMeta<typeof Header1>,
  {
    title: 'Typography/Header/Header2',
    component: Header2,
  } as ComponentMeta<typeof Header2>,
  {
    title: 'Typography/Header/Header3',
    component: Header3,
  } as ComponentMeta<typeof Header3>,
  {
    title: 'Typography/Header/Header4',
    component: Header4,
  } as ComponentMeta<typeof Header4>,
  {
    title: 'Typography/Header/Header5',
    component: Header5,
  } as ComponentMeta<typeof Header5>,
  {
    title: 'Typography/Header/Header6',
    component: Header6,
  } as ComponentMeta<typeof Header6>,
];

const Header_1_Template: ComponentStory<typeof Header1> = args => {
  return <Header1 {...args} />;
};

export const Header_1 = Header_1_Template.bind({});
Header_1.args = {
  children: 'Header 1',
};

const Header_2_Template: ComponentStory<typeof Header2> = args => {
  return <Header2 {...args} />;
};

export const Header_2 = Header_2_Template.bind({});
Header_2.args = {
  children: 'Header 2',
};

const Header_3_Template: ComponentStory<typeof Header3> = args => {
  return <Header3 {...args} />;
};

export const Header_3 = Header_3_Template.bind({});
Header_3.args = {
  children: 'Header 3',
};

const Header_4_Template: ComponentStory<typeof Header4> = args => {
  return <Header4 {...args} />;
};

export const Header_4 = Header_4_Template.bind({});
Header_4.args = {
  children: 'Header 4',
};

const Header_5_Template: ComponentStory<typeof Header5> = args => {
  return <Header5 {...args} />;
};

export const Header_5 = Header_5_Template.bind({});
Header_5.args = {
  children: 'Header 5',
};

const Header_6_Template: ComponentStory<typeof Header6> = args => {
  return <Header6 {...args} />;
};

export const Header_6 = Header_6_Template.bind({});
Header_6.args = {
  children: 'Header 6',
};
