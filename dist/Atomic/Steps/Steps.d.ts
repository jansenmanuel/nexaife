import React from 'react';

export interface StepsProps {
    id?: string;
    items: Array<{
        id: string;
        title: string;
    }>;
    current: number;
    mainColor?: string;
}

declare const Steps: React.FC<StepsProps>;

export default Steps;