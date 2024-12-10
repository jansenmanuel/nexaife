import React from 'react';

export interface BreadcrumbProps {
    id: string | number;
    items: Array<{ key: string | number; label: string; to: string }>;
}

declare const Breadcrumb: React.FC<BreadcrumbProps>;

export default Breadcrumb;