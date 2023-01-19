export interface Button
  extends React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  small?: boolean;
  kind?: 'primary' | 'danger' | 'secondary' | 'ghost' | 'tertiary';
  href?: string;
  tabIndex?: number;
  type?: 'button' | 'reset' | 'submit';
  skeleton?: boolean;
  buttonName?: string;
  buttonDescription?: string;
  buttonImage?: string;
  opened?: boolean;
  active?: boolean;
}
