import { Divider, Table, Typography } from "antd";
import PROGRESSBAR_V_2_0_2 from "../../../../Component/Molecules/ProgressBar/ProgressBar";


const ProgressBarExample = () => {


    const column = [
        {
            title: `Props Name`,
            dataIndex: `name`,
            key: `name`
        },
        {
            title: `Description`,
            dataIndex: `description`,
            key: `description`,
        },
        {
            title: `Type`,
            dataIndex: `type`,
            key: `type`
        },
        {
            title: `Default`,
            dataIndex: `default`,
            key: `default`
        },
        {
            title: `Example`,
            dataIndex: `example`,
            key: `example`
        }
    ];

    const dataSource = [
        {
            key: '1',
            name: 'titleBar',
            description: 'Props untuk memberikan value Title. jika dikosongkan makan tidak akan muncul title Bar',
            default: 'null',
            type: 'string',
            example: 'ini judul',
        },
        {
            key: '2',
            name: 'valuePercent',
            description: 'Props untuk memberikan value persentase',
            default: '0',
            type: 'int',
            example: '-',
        },
        {
            key: '3',
            name: 'size',
            description: 'Props untuk menentukan ukuran komponen. HANYA ADA 3 SIZE',
            default: 'sm',
            type: 'string',
            example: '"sm" , "md", "lg"',
        },
        {
            key: '4',
            name: 'noValuePercent',
            description: 'Props untuk menhilangkan value persentase',
            default: 'false',
            type: 'bool',
            example: '"true", "false"',
        }
    ]
    return (
        <div style={{
            padding: '25px'
        }}>
            <Divider >
                <Typography.Title>
                    Progress Bar
                </Typography.Title>
            </Divider>
            <br></br>
            <div>
                <Typography.Paragraph>
                    Progress Bar
                </Typography.Paragraph>
            </div>
            <div>
                <PROGRESSBAR_V_2_0_2
                    valuePercent={50}
                    size={`sm`}
                />
            </div>
            <div>
                <Typography.Paragraph>
                    Progress Bar Md
                </Typography.Paragraph>
            </div>
            <div>
                <PROGRESSBAR_V_2_0_2
                    valuePercent={75}
                    size={`md`}
                />
            </div>
            <div>
                <PROGRESSBAR_V_2_0_2
                    valuePercent={65}
                    size={`md`}
                    noValuePercent={true}
                />
            </div>
            <div>
                <Typography.Paragraph>
                    Progress Bar LG
                </Typography.Paragraph>
            </div>
            <div >
                <PROGRESSBAR_V_2_0_2
                    valuePercent={100}
                    size={`lg`}
                />
            </div>
            <div >
                <PROGRESSBAR_V_2_0_2
                    valuePercent={87}
                    size={`lg`}
                    noValuePercent={true}
                />
            </div>
            <br></br>
            <br></br>
            <Divider >
                <Typography.Title>
                    Progress Bar with Title
                </Typography.Title>
            </Divider>
            <div >
                <div>
                    <Typography.Paragraph>
                        Progress Bar LG
                    </Typography.Paragraph>
                </div>
                <div>

                    <PROGRESSBAR_V_2_0_2
                        titleBar={"Title Progress Bar Large"}
                        valuePercent={100}
                        size={`lg`}
                    />
                </div>
            </div>
            <div >
                <div>
                    <Typography.Paragraph>
                        Progress Bar LG
                    </Typography.Paragraph>
                </div>
                <div>

                    <PROGRESSBAR_V_2_0_2
                        titleBar={"Title Progress Bar Medium"}
                        valuePercent={50}
                        size={`md`}
                    />
                </div>
            </div>
            <div >
                <div>
                    <Typography.Paragraph>
                        Progress Bar SM
                    </Typography.Paragraph>
                </div>
                <div>

                    <PROGRESSBAR_V_2_0_2
                        titleBar={"Title Progress Bar Small"}
                        valuePercent={25}
                        size={`sm`}
                    />
                </div>
            </div>
            <br></br>
            <Table
                columns={column}
                dataSource={dataSource}
            />
        </div>
    );
}

export default ProgressBarExample;