export type Button = {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  wide?: boolean;
  column?: boolean;
  tabIndex?: number;
  type?:
    | 'caps'
    | 'shift'
    | 'tab'
    | 'enter'
    | 'space'
    | 'backspace'
    | 'delete'
    | 'arrow-up'
    | 'arrow-down'
    | 'arrow-left'
    | 'arrow-right'
    | 'lang'
    | 'paste'
    | 'close-keyboard'
    | string;
  keyCap?: string;
  alt?: string;
  skeleton?: boolean;
};
