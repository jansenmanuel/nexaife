import React from 'react';

declare const Sizes: ["sm", "md", "lg", "xl"];
declare const Types: ["default", "illustration", "detail", "form"];
export type Type = typeof Types[number];
export type Size = typeof Sizes[number];

interface BaseDialogProps {
    id?: string | number;
    type?: Type;
    title?: string;
    content?: React.ReactNode;
    dialogSize?: Size;
    open?: boolean;
    onOk?: () => void;
    onCancel?: () => void;
    onOkTitle?: string;
    onCancelTitle?: string;
    contentTitle?: string;
    children?: React.ReactNode;
    mediaUrl?: string;
    message?: string;
    singleButton?: boolean;
    isVideo?: boolean;
    footer?: React.ReactNode;
}

export type DialogProps = BaseDialogProps;

declare const Dialog: React.FC<DialogProps>;

export default Dialog;