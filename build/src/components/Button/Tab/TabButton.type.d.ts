/// <reference types="react" />
export declare type Button = {
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
} & React.HTMLAttributes<HTMLDivElement>;
