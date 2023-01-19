export interface Button extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  skeleton?: boolean;
  activeId?: number;
  button?: {
    id: number;
    url: string;
    title: string;
  };
}
