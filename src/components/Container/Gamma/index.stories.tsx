import {ComponentMeta, ComponentStory} from '@storybook/react';
import AppButton from '../../Button/App';
import ControllerButton from '../../Button/Controller';
import TabButton, {NewTab, TabSeperator} from '../../Button/Tab';
import {Header3} from '../../Typography';
import {Activity, Apps, Tabs} from '../Activity';
import {AppControls, Controls, ControlsLeft, ControlsRight} from '../Controls';

import {Gamma, GammaRoot} from './';

export default {
  title: 'Container/GammaRoot',
  component: GammaRoot,
  args: {},
};

export const ControlsContainer: ComponentStory<typeof GammaRoot> = ({
  children,
  ...args
}) => {
  return (
    <>
      <GammaRoot {...args}>
        <Gamma opened={true} header="Activity">
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
                <TabSeperator />
                <TabButton
                  button={{url: 'www.google.com', title: 'Google', id: 1}}
                  activeId={1}
                />
                <TabButton
                  button={{url: 'www.youtube.com', title: 'Youtube', id: 2}}
                />
                <TabSeperator />
                <NewTab />
              </Tabs>
            </>
          </Activity>

          <AppControls>
            <Controls>
              <ControlsLeft>
                <ControllerButton
                  buttonDescription="GAMMA"
                  buttonName="HOME"
                  kind="tertiary"
                  wide
                />
              </ControlsLeft>
              <ControlsRight>
                <ControllerButton buttonDescription="Accept" buttonName="X" />
                <ControllerButton buttonDescription="Back" buttonName="B" />
              </ControlsRight>
            </Controls>
          </AppControls>
        </Gamma>
      </GammaRoot>
    </>
  );
};
