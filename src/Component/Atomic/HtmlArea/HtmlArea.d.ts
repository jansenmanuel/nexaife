import React from 'react';

export interface HtmlAreaProps {
    id?: string | number;
    onChange?: (value: string) => void;
    content?: string;
    disable?: boolean;
}

declare const HtmlArea: React.FC<HtmlAreaProps>;

export default HtmlArea;