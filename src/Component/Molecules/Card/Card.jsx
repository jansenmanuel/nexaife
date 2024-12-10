import { Button, Card as CardAntd, Col, Dropdown, Row, Typography } from 'antd';
import React from 'react';
import ChevronRight from '../../Asset/Icon/ChevronRight';
import MoreIcon from '../../Asset/Icon/MoreIcon';
import './CardCustomCSS.scss';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from '../../config/i18nConfig';

const CardBase = ({
    id,
    actionProps,
    onClickProps,
    titileCard,
    roleName,
    datagroupName,
    optionDropdown
}) => {
    const items = [
        {
            key: '1',
            label: (
                <Button >
                    tes
                </Button>

            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    menu 2
                </a>
            ),
        },
    ];
    const { t } = useTranslation();
    return (
        <div className='custom-card'>
            <CardAntd
                id={id}
                style={{
                    width: '100%',
                    // width: '400px'
                }}
            >
                {/* <div style={{display: 'flex'}}>
                    <div>judul</div>
                    <div>icon</div>
                </div> */}
                <Row>
                    <Col sm={12}
                        style={{
                            textAlign: 'start'
                        }}
                    >
                        <p className='title-card'> {titileCard}</p>
                    </Col>
                    <Col sm={12} style={{
                        textAlign: 'end'
                    }}>

                        <a onClick={actionProps === 1 ? onClickProps : () => { }}>
                            {actionProps === -1 ? (
                                <></>
                            ) : actionProps === 1 ? (
                                <ChevronRight />
                            ) : (
                                <Dropdown
                                    menu={{
                                        items: optionDropdown, // Use the prop here
                                    }}
                                    placement="bottomLeft"
                                >
                                    <Button
                                        style={{
                                            border: 'none',
                                        }}
                                    >
                                        <MoreIcon />
                                    </Button>
                                </Dropdown>
                            )}
                        </a>
                    </Col>
                </Row>
                {/* row untuk child data */}
                {/* {childData && childData.map((item, index) => ( */}
                <Row style={{ paddingTop: '24px' }}>
                    <Col sm={12} style={{ textAlign: 'start' }}>
                        <div>
                            <Typography.Text className='title-card-data'> {t("COMMON:CARD.ROLE")}</Typography.Text>

                        </div>
                        <div>
                            <Typography.Text className='desc-card-data' >
                                {roleName || t("COMMON:CARD.ROLE_NAME_CARD")}
                            </Typography.Text>
                        </div>
                    </Col>
                    <Col sm={12} style={{ textAlign: 'start' }}>
                        <div>
                            <Typography.Text className='title-card-data'>Data Group</Typography.Text>

                        </div>
                        <div>
                            <Typography.Text className='desc-card-data' >
                                {datagroupName || t("COMMON:CARD.DATA_GROUP_CARD")}
                            </Typography.Text>
                        </div>
                    </Col>
                </Row>
                {/* ))} */}
            </CardAntd>
        </div>
    );
}

Card.defaultProps = {
    actionProps: 1,
    titileCard: "Pt. Title Card",
    optionDropdown: 
        [
            {
                key: '1',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                        menu 1
                    </a>

                ),
            },
            {
                key: '2',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                        menu 2
                    </a>
                ),
            },
        ]
}


export default function Card(props){
    return (
        <I18nextProvider i18n={i18n}>
            <CardBase {...props}/>
        </I18nextProvider>
    );
}

