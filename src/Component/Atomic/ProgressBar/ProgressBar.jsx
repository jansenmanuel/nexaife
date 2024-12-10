import { Progress } from 'antd';
import React from 'react'
import './ProgressBar.scss'

const ProgressBarAtomic = ({ valuePercent, size, noValuePercent }) => {
    // const mainColors = "--main-color"
    return (
        <div className={`customize-size-${size} ${noValuePercent ? 'no-value-percent' : ''}`} >
            <Progress
                percent={valuePercent}
                // size="small"
                // size={[300, 50]}
            // strokeColor={{
            //     from: '#13A1DC',
            //     to: '#13A1DC'
            // }}
            />
        </div>
    );
}

ProgressBarAtomic.defaultProps = {
    valuePercent: 0,
    size: `sm`
}

export default ProgressBarAtomic;