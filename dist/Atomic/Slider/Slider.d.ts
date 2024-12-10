import React from 'react';

export interface SliderProps {
    id?: string | number;
    color?: string;
    min?: number;
    max?: number;
    value?: number;
    onChange?: (value: number) => void;
}

declare const Slider: React.FC<SliderProps>;
export default Slider;