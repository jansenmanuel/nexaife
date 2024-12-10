import React from 'react';

import { propsDefault } from '../../Enum/PropsDefault';

const ChevronRight = (props) => {
    return (
        <svg width={props.size}
            height={props.size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1548_58284)">
                <path d="M11.7501 10.0125C11.5001 9.73824 11.2822 9.48559 11.0578 9.24017C9.5515 7.54383 8.03876 5.84028 6.53243 4.14394C6.15424 3.71805 6.16065 3.12614 6.53243 2.74356C6.82087 2.44761 7.25034 2.41873 7.56442 2.67138C7.62852 2.72191 7.68621 2.77965 7.73749 2.84462C9.64124 4.9885 11.5386 7.12516 13.4423 9.26904C13.8526 9.73102 13.8526 10.2724 13.4423 10.7344C11.5322 12.8855 9.62842 15.0294 7.71826 17.1805C7.29521 17.6569 6.66704 17.5919 6.37218 17.0433C6.1927 16.7113 6.21193 16.307 6.42346 15.9966C6.46833 15.9317 6.5132 15.8811 6.56448 15.8234C8.24388 13.9322 9.91687 12.0409 11.5963 10.1569C11.6347 10.1064 11.6924 10.0703 11.7501 10.0125Z" 
                fill={props.color} />
            </g>
            <defs>
                <clipPath id="clip0_1548_58284">
                    <rect width="15" height="15" fill="white" transform="translate(2.5 2.5)" />
                </clipPath>
            </defs>
        </svg>
    );
};

ChevronRight.defaultProps = {
    size: propsDefault.iconSize,
    color: propsDefault.iconColor,
};
export default ChevronRight;




