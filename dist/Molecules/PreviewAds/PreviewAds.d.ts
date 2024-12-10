import React from 'react';

export interface PreviewAdsProps {
    id?: string | number;
    previewType?: string;
    fileList?: any[];
    customTitle?: string; 
}

declare const PreviewAds: React.FC<PreviewAdsProps>;
export default PreviewAds;