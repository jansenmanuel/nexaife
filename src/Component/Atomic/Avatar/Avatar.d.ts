import React from "react";

declare const ButtonSizes : ["xs", "sm", "md", "lg", "xl", "xxl"];
declare const ButtonTypes : ["primary", "secondary", "tertiary", "link"];
declare const AvatarStates : ["initial", "default", "notification", "badge"];

export type AvatarSize = typeof ButtonSizes[number];
export type AvatarType = typeof ButtonTypes[number];
export type AvatarState = typeof AvatarStates[number];

export interface BaseAvatarProps {
    size: AvatarSize;
    type: AvatarType;
    state: AvatarState;
    mainColor: string;
    count: number;
    imgUrl: string;
    style: React.CSSProperties;
    alt: string;
    txtAvatar: string;
}

export type AvatarProps = BaseAvatarProps;

declare const Avatar: React.FC<AvatarProps>;
export default Avatar
