import React from 'react';

declare const Sizes: ["sm", "md", "lg"];
export type Size = typeof Sizes[number];

export interface ToggleProps {
    size?: Size;
    id?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    disabled?: boolean;
    labelColor?: string;
    checkColor?: string;
}

declare const Toggle : React.FC<ToggleProps>;

export default Toggle