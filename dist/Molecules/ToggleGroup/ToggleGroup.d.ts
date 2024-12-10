import React from 'react';

declare const Sizes: ["sm", "md", "lg"];
export type Size = typeof Sizes[number];

export interface ToggleGroupProps {
    id?: string | number;
    size: Size;
    label: string;
    toggleLabel: string;
    informationTop?: string;
    informationBottom?: string;
    errorInformation?: string;
    labelColor?: string;
    checkColor?: string;
}

declare const ToggleGroup: React.FC<ToggleGroupProps>;

export default ToggleGroup;