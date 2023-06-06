export interface ICommon {
    children?: React.ReactNode;
    className?: string;
    color?: "black" | "white";
    onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
    onClick?(e?: any): void | React.MouseEventHandler<HTMLButtonElement>;
    isOpen?: Boolean
    Array?: Array<any>
    priority?: boolean
}
