import React from "react";

declare const sizes : ["xs", "sm", "md", "lg", "xl", "xxl"];
declare const states : ["default", "colored", "outlined", "disabled"];

export type TagSize = typeof sizes[number];
export type TagState = typeof states[number];

export interface TagProps {
    id?: string | number;
    iconLeft? : React.ReactElement;
    closable? : boolean;
    iconRight? : React.ReactElement;
    title : string;
    size? : TagSize;
    state? : TagState;
    color? : string;
    onClose? : () => void;
    colorFontProps? : string;
}

declare const Tag: React.FC<TagProps>;

export default Tag