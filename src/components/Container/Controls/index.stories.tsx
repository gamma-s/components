import {ComponentMeta, ComponentStory} from '@storybook/react';
import AppButton from '../../Button/App';
import ControllerButton from '../../Button/Controller';
import TabButton from '../../Button/Tab';

import {Controls, ControlsLeft, ControlsRight, AppControls} from './';

export default [
  {
    title: 'Container/Controls',
    component: Controls,
    args: {},
  } as ComponentMeta<typeof Controls>,
  {
    title: 'Container/ControlsLeft',
    component: ControlsLeft,
    args: {},
  } as ComponentMeta<typeof ControlsLeft>,
  {
    title: 'Container/ControlsRight',
    component: ControlsRight,
    args: {},
  } as ComponentMeta<typeof ControlsRight>,
  {
    title: 'Container/AppControls',
    component: AppControls,
    args: {},
  } as ComponentMeta<typeof AppControls>,
];

export const ControlsContainer: ComponentStory<typeof Controls> = ({
  children,
  ...args
}) => {
  return (
    <Controls {...args}>
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
  );
};

export const ControlsLeftContainer: ComponentStory<typeof ControlsLeft> = ({
  children,
  ...args
}) => {
  return (
    <ControlsLeft {...args}>
      <ControllerButton
        buttonDescription="GAMMA"
        buttonName="HOME"
        kind="tertiary"
        wide
      />
    </ControlsLeft>
  );
};

export const ControlsRightContainer: ComponentStory<typeof ControlsRight> = ({
  children,
  ...args
}) => {
  return (
    <ControlsRight {...args}>
      <ControllerButton buttonDescription="Accept" buttonName="X" />
      <ControllerButton buttonDescription="Back" buttonName="B" />
    </ControlsRight>
  );
};

export const AppControlsContainer: ComponentStory<typeof AppControls> = ({
  children,
  ...args
}) => {
  return (
    <AppControls {...args}>
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
  );
};
