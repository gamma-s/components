import {
  Body1,
  Body2,
  ButtonText,
  CaptionText,
  Header1,
  Header2,
  Header3,
  Header4,
  Header5,
  Header6,
  OverlineText,
  Subtitle1,
  Subtitle2,
} from './components/Typography';

import AppButton from './components/Button/App';
import {Button} from './components/Button';
import ControllerButton from './components/Button/Controller';
import TabButton from './components/Button/Tab';

const App = () => {
  return (
    <>
      <AppButton opened>Hello</AppButton>
      <Body1>Body 1 text</Body1>
      <Body2>Body 2 text</Body2>
      <Header1>Header 1</Header1>
      <Header2>Header 2</Header2>
      <Header3>Header 3</Header3>
      <Header4>Header 4</Header4>
      <Header5>Header 5</Header5>
      <Header6>Header 6</Header6>
      <ButtonText>Button Text</ButtonText>
      <CaptionText>Caption Text</CaptionText>
      <OverlineText>Overline Text</OverlineText>
      <Subtitle1>Subtitle 1</Subtitle1>
      <Subtitle2>Subtitle 2</Subtitle2>
      <ControllerButton buttonName="A" buttonDescription="Default" />
      <ControllerButton buttonName="A" buttonDescription="Skeleton" skeleton />
      <ControllerButton buttonName="A" buttonDescription="Ghost" kind="ghost" />
      <ControllerButton
        buttonName="A"
        buttonDescription="Secondary"
        kind="secondary"
      />
      <ControllerButton
        buttonName="A"
        buttonDescription="Tertiary"
        kind="tertiary"
      />
      <ControllerButton
        buttonName="A"
        buttonDescription="Danger"
        kind="danger"
      />
      <ControllerButton buttonName="A" buttonDescription="Danger" disabled />
      <ControllerButton buttonName="GAMMA" buttonDescription="Danger" wide />
      <TabButton
        button={{url: 'www.google.com', title: 'Google', id: 1}}
      ></TabButton>
      <TabButton
        button={{url: 'www.moogle.com', title: 'Moogle', id: 2}}
        activeId={2}
      >
        <Button className="gds-button--context--active" kind="context">
          Button ghost
        </Button>
        <Button kind="context">Button ghost</Button>
        <Button kind="context">Button ghost</Button>
        <Button kind="context">Button ghost</Button>
        <Button kind="context">Button ghost</Button>
      </TabButton>

      <Button>Button default</Button>
      <Button skeleton>Button skeleton</Button>
      <Button kind="ghost">Button ghost</Button>
      <Button kind="secondary">Button secondary</Button>
      <Button kind="tertiary">Button tertiary</Button>
      <Button kind="danger">Button danger</Button>
      <Button disabled>Button disabled</Button>
    </>
  );
};

export default App;
