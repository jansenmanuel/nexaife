import React from 'react';

declare const sizes : ["sm", "md", "lg"];
export type size = typeof sizes[number];

export interface RatingProps {
    id?: string | number;
    size?: size;
    onChange?: (value: number) => void;    
    defaultValue?: number;
    color?: string;
    disabled?: boolean;
}

declare const Rating : React.FC<RatingProps>;
export default Rating