import React from 'react';
import { Avatar as AvatarAntd, Badge } from 'antd'; 
import styles from './Avatar.module.scss';
import AvatarIcon from '../../Asset/Icon/AvatarDefault.png';
import PropTypes from 'prop-types';
import { getSize, getType } from '../../Utils/Avatar/AvatarUtils';
import {getBadgeSizeClass, getAvatarSizeClass } from '../../Utils/Avatar/AvatarUtils'

const Avatar = ({type, size, state, mainColor, count, imgUrl, style, alt, txtAvatar, ...props}) => {
    const { textClass, offset } = getSize(size);
    const typeValue = getType(type);
    const badgeSizeClass = getBadgeSizeClass(size, state);
    const {avatarSizeClass, containerSquareClass} = getAvatarSizeClass(size);

    const InitialStateContent = () => (
        <div className={styles['content-initial']} style={{ backgroundColor: mainColor }}>
            <div className={styles[textClass]}>{count || txtAvatar}</div>
        </div>
    );
    
    const renderAvatarWithBadge = () => {
        if (state === 'notification') {
            return (
                    <div className={`${styles.container} ${containerSquareClass}`}>
                    <div className={badgeSizeClass}>
                        <Badge count={count} style={{ ...style, backgroundColor: mainColor }} {...props}>
                           <div className={avatarSizeClass}>
                                <AvatarAntd shape={typeValue} icon={state === 'initial' ? <InitialStateContent /> : <img src={imgUrl} alt={alt} {...props}  />} />
                           </div>
                        </Badge>
                    </div>
                </div>
               
            );
        } else if (state === 'badge') {
            return (
                <div className={`${styles.container} ${containerSquareClass}`}>
                    <div className={badgeSizeClass}>
                        <Badge dot style={{...style, backgroundColor: mainColor}} offset={offset} {...props}>
                            <div className={avatarSizeClass}>
                            <Avatar shape={typeValue}  icon={state === 'initial' ? <InitialStateContent />  : <img src={imgUrl} alt={alt} {...props} />} />
                            </div>
                        </Badge>
                    </div>
                </div>
            );
        } else {
            return (
                <div className={`${styles.container} ${containerSquareClass}`}>
                    <div className={avatarSizeClass}>
                        <Avatar shape={typeValue} style={{...style, backgroundColor: mainColor}} {...props}  icon={state === 'initial' ? <InitialStateContent />  : <img src={imgUrl} alt={alt} />} />
                    </div>
                </div>
            );
        }
    }

    return renderAvatarWithBadge();
}

Avatar.propTypes = {
    type: PropTypes.oneOf(['circle', 'square']),
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'xxl']),
    state: PropTypes.oneOf(['initial','default', 'notification', 'badge']),
    mainColor: PropTypes.string,
    count: PropTypes.number,
    imgUrl: PropTypes.string,
    style: PropTypes.object,
    alt: PropTypes.string,
    txtAvatar: PropTypes.string
}

Avatar.defaultProps = {
    type: "circle",
    size: "md",
    state: "default",
    count: 0,
    imgUrl: AvatarIcon,
    style: {},
    alt: "",
    txtAvatar: ""
}

export default Avatar;
