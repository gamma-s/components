/// <reference types="react" />
export declare type Button = {
    children?: React.ReactNode;
    className?: string;
    disabled?: boolean;
    small?: boolean;
    wide?: boolean;
    kind?: 'primary' | 'danger' | 'secondary' | 'ghost' | 'tertiary';
    href?: string;
    tabIndex?: number;
    type?: 'button' | 'reset' | 'submit';
    skeleton?: boolean;
    buttonName?: string;
    buttonDescription?: string;
};
