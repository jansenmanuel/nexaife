import React from 'react';

declare const sizes: ['sm', 'md', 'lg'];
export type Size = typeof sizes[number];

export interface DividerProps {
    id ?: string
    size ?: Size
}

declare const Divider: React.FC<DividerProps>;

export default Divider