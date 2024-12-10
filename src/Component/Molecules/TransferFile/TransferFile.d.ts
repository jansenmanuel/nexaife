import React from "react";

export interface TransferFileProps {
   listData?: any[];
   targetKeys?: any[];
   handleChangeData?: any;
   titleLeft?: string;
   titleRight?: string;
}

declare const TransferFile: React.FC<TransferFileProps>;

export default TransferFile;