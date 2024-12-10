import React, { useState } from 'react';
import PROGRESSTRACK_V2_0_1 from '../../../Component/Molecules/ProgressTrack/ProgressTrack';
import { Button, Table, Typography } from 'antd';
import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';


const ProgressTrackExample = () => {
    const [current, setCurrent] = useState(0)
    const steps = [
        {
            title: 'Login', icon: <UserOutlined />,
        },
        {
            title: 'Verification', icon: <SolutionOutlined />,
        },
        {
            title: 'Pay', icon: <LoadingOutlined />,
        },
        {
            title: 'Donee', icon: <SmileOutlined />
        }
    ];

    const columns = [
        {
            title: 'Props Name',
            dataIndex: 'name',
            key: 'name',
            // render: (text) => <a>{text}</a>,
        },
        {
            title: 'Description',
            dataIndex: 'desc',
            key: 'desc',
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: 'Default',
            dataIndex: 'default',
            key: 'default',
        },
        {
            title: 'Example',
            dataIndex: 'example',
            key: 'example',
        },
    ]
    const data = [
        {
            key: '1',
            name: 'id',
            desc: 'Props untuk id component',
            default: '-',
            type: 'string',
            example: '',
        },
        {
            key: '2',
            name: 'listStep',
            desc: 'Props untuk ',
            type: 'array of object',
            default: `'[
                {
                    title: 'Step 1', icon: <UserOutlined />,
                },
                {
                    title: 'Step 2', icon: <SolutionOutlined />,
                },
                {
                    title: 'Done', icon: <SmileOutlined />
                }
            ]'`,
            example: `[
                {
                    title: 'Step 1', icon: <UserOutlined />,
                },
                {
                    title: 'Step 2', icon: <SolutionOutlined />,
                },
                {
                    title: 'Done', icon: <SmileOutlined />
                }
            ]`,
        },
        {
            key: '3',
            name: 'currentSteps',
            desc: 'Props untuk menentukan posisi step',
            type: 'int',
            default: '0',
            example: '2',
        },
    ]
    return (
        <div>

            <div>
                <div>
                    <Typography.Title >
                        Progress Track V2.0.1
                    </Typography.Title>
                </div>
                <div style={{ padding: '50px' }}>
                    <PROGRESSTRACK_V2_0_1
                        listStep={steps}
                        currentSteps={current}
                    />
                </div>
            </div>
            <div
                style={{
                    marginTop: "40px"
                }}
            >

                {current > 0 && (
                    <Button
                        style={{
                            margin: '0 8px',
                        }}
                        onClick={() => setCurrent(current - 1)}
                    >
                        Previous
                    </Button>
                )}

                {
                    current < steps.length - 1 && (
                        <Button type="primary" onClick={() => setCurrent(current + 1)}>
                            Next
                        </Button>
                    )
                }
            </div>
            <div
                style={{ padding: '20px' }}>
                <Table
                    columns={columns}
                    dataSource={data}
                />
            </div>
        </div>
    );
}

export default ProgressTrackExample;