import React from 'react';
import PropTypes from 'prop-types';
import { Steps as StepsAntd } from 'antd';
import style from './Steps.module.scss';
import { BLACK_COLOR, BLUE_COLOR } from '../../Constant/colorConstant';

const { Step } = StepsAntd;
const Steps = ({ id, items, current, mainColor, ...props }) => {
  const stepsStyle = {
    '--main-color': mainColor
  }


  return (
    <div className={style.container} style={stepsStyle}>
      <StepsAntd
        id={id}
        current={current}
        {...props}
      >
        {items?.map((item) => (
          <Step
            id={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </StepsAntd>
    </div>
  );
};

Steps.propTypes = {
  id: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
    })
  ).isRequired,
  current: PropTypes.number.isRequired,
};

Steps.defaultProps = {
  items: [],
  current: 0,
  mainColor: BLUE_COLOR,
};

export default Steps;
