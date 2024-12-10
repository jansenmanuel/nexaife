import React from 'react';
import PropTypes from "prop-types";
import styled from './Image.module.css'
import {IMAGE_FALLBACK} from "../../../Constant/generalConstant";

const Image = ({aspectRatio = '1:1', orientation = 'portrait', src, alt, fallback = IMAGE_FALLBACK, ...props}) => {
  const [width, height] = aspectRatio.split(":").map(Number);
  const calculatedAspectRatio =
    orientation === "portrait"
      ? `${height} / ${width}`
      : `${width} / ${height}`;

  return (
    <div
      className={styled.imageContainer}
      style={{aspectRatio: calculatedAspectRatio}}
    >
      <img
        src={src}
        onError={(e) => e.currentTarget.src = fallback}
        alt={alt}
        className={styled.imageContent}
        {...props}
      />
    </div>
  );
};

Image.propTypes = {
  aspectRatio: PropTypes.string.isRequired,
  orientation: PropTypes.oneOf(["portrait", "landscape"]).isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  fallback: PropTypes.string
};

export default Image;