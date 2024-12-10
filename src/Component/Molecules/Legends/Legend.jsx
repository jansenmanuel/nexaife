import React from 'react';
import styled from './legendGroup.module.css'
import Legend from "../../Atomic/Legends/Legend";
import {calculateGap} from "../../Utils/Legends/LegendGroup";
import PropTypes from "prop-types";

const LegendGroup = ({items = [], size = 'Sm'}) => {

  const gap = calculateGap(size);

  return (
    <div className={styled.Wrap} style={{gap}}>
      {
        items?.map((item, index) => <Legend key={index} title={item.title} size={size} color={item?.color}/>)
      }
    </div>
  );
};

LegendGroup.propTypes = {
  size: PropTypes.oneOf(['Sm', 'Md', 'Lg']),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      color: PropTypes.string,
    })
  ),
}

export default LegendGroup;