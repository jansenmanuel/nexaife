import { Tag as TagAntd } from 'antd'
import React from 'react'
import PropTypes from 'prop-types';
import style from './Tag.module.scss'
import { getProperties } from '../../Utils/DataDisplay/Tag/TagProperties'

const Tag = ({ id, iconLeft, closable, iconRight, title, size , state, color, onClose, fontColorProps}) => {

  const { backgroundColor, borderColor, fontColor } = getProperties(state);
  const renderTag = `${style[`Tag${size}`]}`;
  const renderLabel = `${style[`Label${size}`]}`;
  const renderState = `${style[`State${state}`]}`


  return (
    <div className={renderTag}>
      <TagAntd
        id={id}
        className={renderState}
        icon={iconLeft}
        closeIcon={iconRight}
        closable={closable}
        color={backgroundColor ? backgroundColor : color}
        size={size}
        onClose={onClose}
        style={{
          cursor: 'pointer',
          borderColor: state === 'outlined' && fontColorProps? fontColorProps : borderColor
        }}
      >
        <label
          className={renderLabel}
          style={{
            color: fontColorProps ? fontColorProps : fontColor,
          }}
        >
          {title}
        </label>
      </TagAntd>
    </div>
  )
}

Tag.propTypes = {
  iconLeft: PropTypes.element,
  closable: PropTypes.bool,
  iconRight: PropTypes.element,
  title: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
  state: PropTypes.oneOf(['default', 'colored', 'outlined','disabled']),
  color: PropTypes.string,
  onClose: PropTypes.func,
};

Tag.defaultProps = {
  size: 'md',
  closable: false,
  state: 'default',
  onClose: () => {},
};

export default Tag



