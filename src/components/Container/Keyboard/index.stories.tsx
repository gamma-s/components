import {ComponentMeta, ComponentStory} from '@storybook/react';
import KeyboardButton from '../../Button/Keyboard';

import {KeyboardContainer, KeyboardGrid, KeyboardRow} from './';
const layouts = {
  EN: [
    [
      {
        key: '`',
        alt: '~',
        type: 'tilda',
      },
      {
        key: '1',
        alt: '!',
      },
      {
        key: '2',
        alt: '@',
      },
      {
        key: '3',
        alt: '#',
      },
      {
        key: '4',
        alt: '$',
      },
      {
        key: '5',
        alt: '%',
      },
      {
        key: '6',
        alt: '^',
      },
      {
        key: '7',
        alt: '&',
      },
      {
        key: '8',
        alt: '*',
      },
      {
        key: '9',
        alt: '(',
      },
      {
        key: '0',
        alt: ')',
      },
      {
        key: '-',
        alt: '_',
      },
      {
        key: '=',
        alt: '+',
      },
      {
        type: 'backspace',
        key: 'Backspace',
        button: 'X',
      },
    ],
    [
      {
        type: 'tab',
        key: 'Tab',
      },
      {
        key: ['q', 'Q'],
      },
      {
        key: ['w', 'W'],
      },
      {
        key: ['e', 'E'],
      },
      {
        key: ['r', 'R'],
      },
      {
        key: ['t', 'T'],
      },
      {
        key: ['y', 'Y'],
      },
      {
        key: ['u', 'U'],
      },
      {
        key: ['i', 'I'],
      },
      {
        key: ['o', 'O'],
      },
      {
        key: ['p', 'P'],
      },
      {
        key: '[',
        alt: '{',
      },
      {
        key: ']',
        alt: '}',
      },
      {
        key: '\\',
        alt: '|',
      },
    ],
    [
      {
        type: 'caps',
        key: 'Caps',
      },
      {
        key: ['a', 'A'],
      },
      {
        key: ['s', 'S'],
      },
      {
        key: ['d', 'D'],
      },
      {
        key: ['f', 'F'],
      },
      {
        key: ['g', 'G'],
      },
      {
        key: ['h', 'H'],
      },
      {
        key: ['j', 'J'],
      },
      {
        key: ['k', 'K'],
      },
      {
        key: ['l', 'L'],
      },
      {
        key: ';',
        alt: ':',
      },
      {
        key: "'",
        alt: '"',
      },
      {
        type: 'enter',
        key: 'Enter',
      },
    ],
    [
      {
        type: 'shift',
        key: 'Shift',
      },
      {
        key: ['z', 'Z'],
      },
      {
        key: ['x', 'X'],
      },
      {
        key: ['c', 'C'],
      },
      {
        key: ['v', 'V'],
      },
      {
        key: ['b', 'B'],
      },
      {
        key: ['n', 'N'],
      },
      {
        key: ['m', 'M'],
      },
      {
        key: ',',
        alt: '<',
      },
      {
        key: '.',
        alt: '>',
      },
      {
        key: '/',
        alt: '?',
      },
      {
        type: 'shift',
        key: 'Shift ',
      },
    ],
    [
      {
        type: 'lang',
        key: '',
      },
      {
        type: 'space',
        key: ' ',
      },
      {
        type: 'arrow-left',
        key: '<',
      },
      {
        type: 'arrow-right',
        key: '>',
      },
      {
        type: 'paste',
        key: 'Paste',
      },
      {
        type: 'close-keyboard',
        key: 'Close',
      },
    ],
  ],
};
export default {
  title: 'Container/KeyboardContainer',
  component: KeyboardContainer,
  args: {},
} as ComponentMeta<typeof KeyboardContainer>;

export const Container: ComponentStory<typeof KeyboardContainer> = ({
  children,
  ...args
}) => {
  return (
    <KeyboardGrid opened>
      <KeyboardContainer>
        {layouts['EN'].map((row, index: number) => {
          return (
            <KeyboardRow key={index}>
              {row.map(({type, key, alt}) => {
                switch (type) {
                  case 'caps':
                    return (
                      <KeyboardButton key={key} keyCap={key} type={type} />
                    );
                  case 'shift':
                    return (
                      <KeyboardButton key={key} keyCap={key} type={type} />
                    );
                  case 'tab':
                    return (
                      <KeyboardButton key={key} keyCap={key} type={type} />
                    );
                  case 'backspace':
                    return (
                      <KeyboardButton key={key} keyCap={key} type={type} />
                    );
                  case 'space':
                    return (
                      <KeyboardButton key={key} keyCap={key} type={type} />
                    );
                  case 'arrow-left':
                    return (
                      <KeyboardButton key={key} keyCap={key} type={type} />
                    );
                  case 'arrow-right':
                    return (
                      <KeyboardButton key={key} keyCap={key} type={type} />
                    );
                  case 'lang':
                    return (
                      <KeyboardButton key={key} keyCap={'EN'} type={type} />
                    );
                  case 'paste':
                    return (
                      <KeyboardButton key={key} keyCap={key} type={type} />
                    );
                  case 'close-keyboard':
                    return (
                      <KeyboardButton key={key} keyCap={key} type={type} />
                    );
                  default:
                    if (Array.isArray(key)) {
                      console.log(key);
                      return <KeyboardButton keyCap={key[0]} type={type} />;
                    } else if (typeof alt !== 'undefined') {
                      return (
                        <KeyboardButton
                          key={alt}
                          keyCap={key}
                          alt={alt}
                          type={type}
                        />
                      );
                    } else {
                      return (
                        <KeyboardButton key={type} keyCap={key} type={type} />
                      );
                    }
                }
              })}
            </KeyboardRow>
          );
        })}
      </KeyboardContainer>
    </KeyboardGrid>
  );
};
