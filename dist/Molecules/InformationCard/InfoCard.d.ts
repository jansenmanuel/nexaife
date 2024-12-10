import React from 'react';

declare const States: ['success', 'warning', 'error', 'information'];
export type State = typeof States[number];

export interface InfoCardProps {
    id?: string;
    state?: State;
    description: string;
    closable?: boolean;
    width?: string;
}

declare const InfoCard: React.FC<InfoCardProps>;

export default InfoCard;