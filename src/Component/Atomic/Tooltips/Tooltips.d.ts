import React from 'react';

declare const type: ["table", 'chart', 'default'];
declare const trigger: ["hover", "click"];
declare const state: ["top", "right", "bottom", "left", "topRight", "topLeft", "bottomRight", "bottomLeft", "rightTop", "rightBottom", "leftTop", "leftBottom"];

export type Types = typeof type[number];
export type Triggers = typeof trigger[number];
export type States = typeof state[number];

export interface TooltipsProps {
    id?: string | number;
    type?: Types;
    title?: string;
    content?: string;
    children?: React.ReactNode;
    caption?: string;
    tag?: boolean;
    trigger?: Triggers;
    state?: States;
    button?: boolean;
    hyperLink?: string;
    style?: React.CSSProperties;
    className?: string;
}

declare const Tooltips: React.FC<TooltipsProps>;

export default Tooltips;