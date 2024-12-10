import React from 'react';

export interface ImageProps {
    id?: string | number;
    aspectRatio: string;
    src: string;
    alt: string;
    fallback?: string;
    orientation: string;
}

declare const Image: React.FC<ImageProps>;

export default Image;