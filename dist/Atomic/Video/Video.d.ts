import React from 'react';

export interface VideoProps {
    id?: string | number;
    src: string;
    alt: string;
    fallback?: string;
    orientation: string;
    aspectRatio: string;
    autoPlay?: boolean;
    controls?: boolean;
    type?: string;
    poster?: string;
    children?: React.ReactNode;
}

declare const Video: React.FC<VideoProps>;
export default Video