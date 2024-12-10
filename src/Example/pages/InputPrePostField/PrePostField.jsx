import { Table } from "antd";
import { Col, ContainerFluid, Div, Label, Row } from "../../../Component";
import PrePostInput from "../../../Component/Atomic/Input/PrePostInput/PrePostInput";

const PrePostField = () => {

    const column = [
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

    const dataSource = [
        {
            key: '1',
            name: 'id',
            desc: 'id',
            default: ' ',
            type: 'string',
            example: 'id-component',
        },
        {
            key: '2',
            name: 'disabledField',
            desc: 'disabledField adalah props untuk menentukan field input disabled atau tidak',
            default: 'false',
            type: 'boolean',
            example: 'false'
        },
        {
            key: '3',
            name: 'addonBefore',
            desc: 'addonBefore adalah props untuk memberikan string di bagian addon kiri',
            default: 'https://',
            type: 'string',
            example: 'www.'
        },
        {
            key: '4',
            name: 'addonAfter',
            desc: 'addonAfter adalah props untuk memberikan string di bagian addon kanan',
            default: '.com',
            type: 'string',
            example: '.com'
        },
        {
            key: '5',
            name: 'onChange',
            desc: 'onChange adalah props untuk handle perubahan input',
            default: ' ',
            type: 'function',
            example: 'handleOnChange'
        },
        {
            key: '6',
            name: 'size',
            desc: 'size adalah props untuk menentukan ukuran komponen',
            default: 'md',
            type: 'string',
            example: '"sm","md","lg","xl","xxl"'
        },
        {
            key: '7',
            name: 'maxWidth',
            desc: 'maxWidth adalah props untuk memberikan ukuran field input. inputkan beserta tipe ukuran. value dalam bentuk string',
            default: '200px',
            type: 'string',
            example: '200px'
        },
        {
            key: '11',
            name: 'defaultValue',
            desc: 'defaultValue adalah props untuk memberikan value default',
            default: 'null',
            type: 'string',
            example: 'ini text default'
        },
        {
            key: '8',
            name: 'textLabel',
            desc: 'textLabel adalah props untuk memberikan nama label',
            default: 'null',
            type: 'string',
            example: 'ini judul'
        },
        {
            key: '9',
            name: 'isOptional',
            desc: 'isOptional adalah props untuk memberikan nama label (optional)',
            default: 'false',
            type: 'boolean',
            example: 'true'
        },
        {
            key: '10',
            name: 'name',
            desc: 'name adalah props untuk memberikan nama pada form',
            default: 'null',
            type: 'string',
            example: 'FormAddName'
        },
        {
            key: '12',
            name: 'placeholder',
            desc: 'placeholder adalah props untuk memberikan default placeholder',
            default: 'null',
            type: 'string',
            example: 'FormAddName'
        },
        {
            key: '13',
            name: 'errorInformation',
            desc: 'errorInformation adalah props untuk memberikan error message',
            default: 'null',
            type: 'string',
            example: '"ini validasi error"'
        },
        {
            key: '14',
            name: 'errorField',
            desc: 'errorField adalah props untuk memberikan kondisi error pada field input',
            default: 'null',
            type: 'boolean',
            example: 'true'
        },
        {
            key: '15',
            name: 'onKeyPress',
            desc: 'onKeyPress adalah props untuk memberikan kondisi error pada field input',
            default: 'null',
            type: 'boolean',
            example: 'true'
        },
    ]
    return (
        <ContainerFluid>
            <Row>
                <Col>
                    <h1>
                        Pre Post Field input small (sm)
                    </h1>
                    <Div>
                        <Row>
                            <Col width={4}>
                                <Label value={"Pre Post Field Input"} />
                            </Col>
                            <Col width={6} style={{
                                textAlign: "left"
                            }}>
                                <PrePostInput
                                    errorField={true}
                                    errorInformation={"ini error"}
                                    size={"sm"}
                                    textLabel={"ini judul"}
                                    // isOptional
                                    required={true}
                                    maxWidth={"300px"}
                                // addonAfter={false}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col width={4}>
                                <Label value={"Pre Post Field Input disabled"} />
                            </Col>
                            <Col width={6}>
                                <PrePostInput
                                    size={"sm"}
                                    disabledField={true}
                                />
                            </Col>
                        </Row>
                    </Div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>
                        Pre Post Field input medium (md)
                    </h1>
                    <Div>
                        <Row>
                            <Col width={4}>
                                <Label value={"Pre Post Field Input"} />
                            </Col>
                            <Col width={6}>
                                <PrePostInput
                                    size={"md"}
                                    maxWidth={"100px"}

                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col width={4}>
                                <Label value={"Pre Post Field Input disabled"} />
                            </Col>
                            <Col width={6}>
                                <PrePostInput
                                    size={"md"}
                                    disabledField={true}
                                />
                            </Col>
                        </Row>
                    </Div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>
                        Pre Post Field input large (lg)
                    </h1>
                    <Div>
                        <Row>
                            <Col width={4}>
                                <Label value={"Pre Post Field Input"} />
                            </Col>
                            <Col width={6}>
                                <PrePostInput
                                    size={"lg"}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col width={4}>
                                <Label value={"Pre Post Field Input disabled"} />
                            </Col>
                            <Col width={6}>
                                <PrePostInput
                                    size={"lg"}
                                    disabledField={true}
                                />
                            </Col>
                        </Row>
                    </Div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>
                        Pre Post Field input Xtra Large (xl)
                    </h1>
                    <Div>
                        <Row>
                            <Col width={4}>
                                <Label value={"Pre Post Field Input"} />
                            </Col>
                            <Col width={6}>
                                <PrePostInput
                                    size={"xl"}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col width={4}>
                                <Label value={"Pre Post Field Input disabled"} />
                            </Col>
                            <Col width={6}>
                                <PrePostInput
                                    size={"xl"}
                                    disabledField={true}
                                />
                            </Col>
                        </Row>
                    </Div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>
                        Pre Post Field input 2Xtra Large (xxl)
                    </h1>
                    <Div>
                        <Row>
                            <Col width={4}>
                                <Label value={"Pre Post Field Input"} />
                            </Col>
                            <Col width={6}>
                                <PrePostInput
                                    size={"xxl"}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col width={4}>
                                <Label value={"Pre Post Field Input disabled"} />
                            </Col>
                            <Col width={6}>
                                <PrePostInput
                                    size={"xxl"}
                                    disabledField={true}
                                />
                            </Col>
                        </Row>
                    </Div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table
                        columns={column}
                        dataSource={dataSource}

                    />
                </Col>
            </Row>
        </ContainerFluid>
    );
}

export default PrePostField;