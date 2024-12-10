import _ from "lodash";
import styles from '../../Atomic/Avatar/Avatar.module.scss';
export const getType = (type) => {
    switch (type) {
        case "circle":
            return "circle";
        case "rounded":
            return "square";
        default:
            return "circle";
    }
}

export const getSize = (size) => {
    const sizeToLower = size.toLowerCase();
    let sizeProps;
    switch (sizeToLower) {
        case "sm":
            sizeProps = {
                textClass: 'text-sm',
                offset: [-5, 29],
            };
            break;
        case "md":
            sizeProps = {
                textClass: 'text-md',
                offset: [-6, 45],
            };
            break;
        case "lg":
            sizeProps = {
                textClass: 'text-lg',
                offset: [-8, 58],
            };
            break;
        case "xl":
            sizeProps = {
                textClass: 'text-xl',
                offset: [-8, 65],
            };
            break;
        case "xxl":
            sizeProps = {
                textClass: 'text-2xl',
                offset: [-8, 71],
            };
            break;
        default:
            sizeProps = {
                textClass: 'text-md',
                offset: [-6, 45],
            };
            break;
    }
    return sizeProps;
}

export const getBadgeSizeClass = (size, state) => {
    let badgeSizeClass;
    if(size.toLowerCase() === "sm") {
        badgeSizeClass = styles[`badge${_.startCase(state)}Style${_.startCase(size)}`];
    } else if(size.toLowerCase() === "md") {
        badgeSizeClass = styles[`badge${_.startCase(state)}Style${_.startCase(size)}`];
    } else if(size.toLowerCase() === "lg") {
        badgeSizeClass = styles[`badge${_.startCase(state)}Style${_.startCase(size)}`];
    } else if(size.toLowerCase() === "xl") {
        badgeSizeClass = styles[`badge${_.startCase(state)}Style${_.startCase(size)}`];
    } else if(size.toLowerCase() === "xxl") {
        badgeSizeClass = styles[`badge${_.startCase(state)}Style${_.startCase(size)}`];
    }
    return badgeSizeClass;
}

export const getAvatarSizeClass = (size) => {
    let avatarSizeClass;
    let containerSquareClass;
    if(size.toLowerCase() === "sm") {
        avatarSizeClass = styles[`avatarStyle${_.startCase(size)}`];
        containerSquareClass = styles[`containerSquare${_.startCase(size)}`];
    } else if(size.toLowerCase() === "md") {
        avatarSizeClass = styles[`avatarStyle${_.startCase(size)}`];
        containerSquareClass = styles[`containerSquare${_.startCase(size)}`];
    } else if(size.toLowerCase() === "lg") {
        avatarSizeClass = styles[`avatarStyle${_.startCase(size)}`];
        containerSquareClass = styles[`containerSquare${_.startCase(size)}`];
    } else if(size.toLowerCase() === "xl") {
        avatarSizeClass = styles[`avatarStyle${_.startCase(size)}`];
        containerSquareClass = styles[`containerSquare${_.startCase(size)}`];
    } else if(size.toLowerCase() === "xxl") {
        avatarSizeClass = styles[`avatarStyle${_.startCase(size)}`];
        containerSquareClass = styles[`containerSquare${_.startCase(size)}`];
    }
    return {avatarSizeClass, containerSquareClass};
}