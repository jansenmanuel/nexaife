import _ from 'lodash';
import style from '../../Molecules/Dialog/Dialog.module.scss';

export const getSize = (size) => {
    const sizeLower = size.toLowerCase();
    let dialogSize, imageSize, inputSize;
    switch (sizeLower) {
        case 'sm':
            dialogSize = 400;
            imageSize = 376;
            inputSize = {
                width: 328,
                height: 50,
            };
            break;
        case 'md':
            dialogSize = 700;
            imageSize = 584;
            inputSize = {
                width: 600,
                height: 50,
            };
            break;
        case 'lg':
            dialogSize = 1080;
            imageSize = 900;
            inputSize = {
                width: 492,
                height: 50,
            };
            break;
        case 'xl':
            dialogSize = 1400;
            imageSize = 1116;
            inputSize = {
                width: 600,
                height: 50,
            };
            break;
        default:
            dialogSize = 400;
            imageSize = 376;
            inputSize = {
                width: 328,
                height: 50,
            };
    }

    return {
        dialogSize,
        imageSize,
        inputSize,
        dividerSize: style[`Divider${_.startCase(size)}`],
    };
};

export const getType = (type, components) => {
    const typeLower = type.toLowerCase();   

    switch (typeLower) {
        case 'default':
            return { footer: components.defaultFooter, contentType: components.defaultContent };
        case 'ilustration':
            return { footer: components.ilustrationFooter, contentType: components.ilustrationContent };
        case 'detail':
            return { footer: components.defaultFooter, contentType: components.detailContent };
        case 'media':
            return { footer: null, contentType: components.imageContent };
        case 'form':
            return { footer: components.defaultFooter, contentType: components.formContent };
        default:
            return { footer: components.defaultFooter, contentType: components.defaultContent };
    }
};

export const getSizeClass = (type, size) => {
    let dialogSizeClass = style[`dialog${_.startCase(type)}${_.startCase(size)}`];
    return dialogSizeClass;
}

export const getSizeDetailContentClass = (size) => {
    let dialogSizeClass = style[`detailContent${_.startCase(size)}`];
    return dialogSizeClass;
}