import React from "react";

declare const AvatarGroupType: ["circle", "square"];
declare const AvatarGroupSize: ["sm", "md", "lg", "xl", "xxl"];
declare const AvatarGroupState: ["group", "multiple"];

export type AvatarGroupType = typeof AvatarGroupType[number];
export type AvatarGroupSize = typeof AvatarGroupSize[number];
export type AvatarGroupState = typeof AvatarGroupState[number];

export interface AvatarGroupProps {
    size: AvatarGroupSize;
    state: AvatarGroupState;
    type: AvatarGroupType;
    count: number;
    mainColor: string;
    imgUrl: string;
    alt: string;
    style: React.CSSProperties;
    className?: string
}

declare const AvatarGroup: React.FC<AvatarGroupProps>;
export default AvatarGroup;