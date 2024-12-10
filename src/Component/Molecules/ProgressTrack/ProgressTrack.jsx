import { SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Steps } from 'antd';
import React from 'react';
import "./ProgressTrack.scss";

const PROGRESSTRACK_V2_0_1 = ({
    id,
    listStep,
    currentSteps

}) => {
    return (
        <Steps 
         current={currentSteps}
         id={id}
         >
            {listStep.map((item, index) => (
                <Steps.Step key={index} title={item.title} icon={item.icon} />
            ))}
        </Steps>
    );
}

PROGRESSTRACK_V2_0_1.defaultProps = {
    id: "stepperNC",
    listStep : [
        {
            title: 'Step 1', icon: <UserOutlined />,
        },
        {
            title: 'Step 2', icon: <SolutionOutlined />,
        },
        {
            title: 'Done', icon: <SmileOutlined />
        }
    ],
    currentSteps: 1,
}
export default PROGRESSTRACK_V2_0_1;