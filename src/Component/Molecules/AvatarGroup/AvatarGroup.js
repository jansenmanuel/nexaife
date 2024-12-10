import React from 'react';
import Avatar from '../../Atomic/Avatar/Avatar'
import { getGapBasedOnSize } from '../../Utils/Avatar/AvatarGroupUtils';
import PropTypes from 'prop-types';
import AvatarIcon from '../../Asset/Icon/avatarIcon.png';


const AvatarGroup = ({ size, state, type, count, mainColor, imgUrl, alt, style, ...props }) => {
    const { groupGap, multipleGap } = getGapBasedOnSize(size);
    const renderAvatars = () => {
        if (state === 'group') {
            return (
                <div style={{ display: "flex", gap: `${groupGap}px` }}>
                    <Avatar size={size} type={type} mainColor={mainColor} alt={alt} imgUrl={imgUrl} style={style} {...props} />
                    <Avatar size={size} type={type} mainColor={mainColor} alt={alt} imgUrl={imgUrl} style={style} {...props}/>
                    <Avatar size={size} type={type} mainColor={mainColor} alt={alt} imgUrl={imgUrl} style={style} {...props}/>
                </div>
            );
        } else if (state === 'multiple') {
            return (
                <div style={{ display: "flex"}}>
                    <Avatar size={size} type={type} mainColor={mainColor} alt={alt} imgUrl={imgUrl} style={style} {...props} />
                    <Avatar size={size} type={type} mainColor={mainColor} style={{...style, marginLeft: multipleGap }} alt={alt} imgUrl={imgUrl} {...props} />
                    <Avatar size={size} type={type} state="initial" count={count} style={{ ...style, marginLeft: multipleGap }} mainColor={mainColor} alt={alt} imgUrl={imgUrl} {...props} />
                </div>
            );
        } else {
            return (
                <div style={{ display: "flex", gap: {groupGap} }}>
                    <Avatar size={size} type={type} mainColor={mainColor} alt={alt} imgUrl={imgUrl} style={style} {...props}/>
                    <Avatar size={size} type={type} mainColor={mainColor} alt={alt} imgUrl={imgUrl} style={style} {...props}/>
                    <Avatar size={size} type={type} mainColor={mainColor} alt={alt} imgUrl={imgUrl} style={style} {...props}/>
                </div>
            );
        }
    }

    return renderAvatars()
       
}

AvatarGroup.propTypes = {
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'xxl']),
    state: PropTypes.oneOf(['group', 'multiple']),
    type: PropTypes.oneOf(['circle', 'square']),
    count: PropTypes.number,
    mainColor: PropTypes.string,
    imgUrl: PropTypes.string,
    alt: PropTypes.string,
    style: PropTypes.object,
}

AvatarGroup.defaultProps = {
    size: "md",
    state: "group",
    type: "circle",
    count: 0,
    mainColor: "",
    imgUrl: AvatarIcon,
    alt: "",
    style: {},
}

export default AvatarGroup;
