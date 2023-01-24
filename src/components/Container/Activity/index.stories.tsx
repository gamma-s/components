import {ComponentMeta, ComponentStory} from '@storybook/react';
import AppButton from '../../Button/App';
import TabButton from '../../Button/Tab';

import {Apps, Tabs, Activity} from './';

export default {
  title: 'Container/Activity',
  component: Activity,
  args: {},
} as ComponentMeta<typeof Activity>;

export const Container: ComponentStory<typeof Apps> = ({children, ...args}) => {
  return (
    <Activity {...args}>
      <>
        <Apps {...args}>
          <AppButton
            buttonDescription="This is a button"
            buttonImage="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
          />
          <AppButton
            buttonDescription="This is a another button"
            buttonImage="https://www.youtube.com/s/desktop/82a4cf4f/img/favicon_144x144.png"
          />
        </Apps>
        <Tabs>
          <TabButton
            button={{url: 'www.google.com', title: 'Google', id: 1}}
            activeId={1}
          />
          <TabButton
            button={{url: 'www.youtube.com', title: 'Youtube', id: 2}}
          />
        </Tabs>
      </>
    </Activity>
  );
};
