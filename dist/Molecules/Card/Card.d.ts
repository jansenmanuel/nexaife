import React from 'react';

export interface CardProps {
    id?: string;
    actionProps?: number;
    onClickProps?: () => void;
    optionDropdown?: Array<{ key: string; label: React.ReactElement }>;
    titleCard?: string;
    roleName?: string;
    datagroupName?: string;
}

declare const Card: React.FC<CardProps>;

export default Card;