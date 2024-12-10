import React from 'react';
import ProgressBarAtomic from '../../Atomic/ProgressBar/ProgressBar';
import './ProgressBar.scss';

const PROGRESSBAR_V_2_0_2 = ({ titleBar, valuePercent, size, noValuePercent }) => {
    return (
        <div>
            {
                titleBar ?
                    <div>
                        <p style={{ padding: '8px 0px' }} className={`progressbar-customize-title-${size}`}>
                            {titleBar}
                        </p>
                    </div>
                    : <></>
            }
            <ProgressBarAtomic
                valuePercent={valuePercent}
                size={size}
                noValuePercent={noValuePercent}
            />
        </div>
    );
}

export default PROGRESSBAR_V_2_0_2;