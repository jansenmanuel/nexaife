import React from 'react';
import {getAspectRatio} from "../../Utils/View/getAspectRatio";
import styled from './Video.module.css'

const Video = ({
                         aspectRatio = "1:1",
                         orientation = 'landscape',
                         src,
                         autoPlay,
                         controls = true,
                         type = "video/mp4",
                         poster = '',
                         children,
                         ...props
                       }) => {
  const calculatedAspectRatio = getAspectRatio(aspectRatio, orientation);

  return (
    <div
      className={styled.videoContainer}
      style={{aspectRatio: calculatedAspectRatio}}
    >
      <video className={styled.videoContent} autoPlay={autoPlay}
             controls={controls} poster={poster} {...props}>
        <source src={src} type={type}/>
        {children}
      </video>
    </div>
  );
};

export default Video;