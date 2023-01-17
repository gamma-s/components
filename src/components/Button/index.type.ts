export type Button = {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  small?: boolean;
  wide?: boolean;
  kind?: 'primary' | 'danger' | 'secondary' | 'ghost' | 'tertiary' | 'context';
  href?: string;
  tabIndex?: number;
  type?: 'button' | 'reset' | 'submit';
  skeleton?: boolean;
  buttonName?: string;
  buttonDescription?: string;
};
