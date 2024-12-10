import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './tooltips.scss';
import CloseIcon from '../../Asset/Icon/CloseIconTooltips.svg';
import { TooltipsGetType } from '../../Utils/Tooltips/TooltipsGetType';

const Tooltips = ({ type, title, content, children, caption, tag, trigger, state, button, hyperLink, style, className, mainColor, ...props }) => {
  
  // State to manage visibility
  const [isVisible, setIsVisible] = useState(false);

  // Handle close click
  const handleCloseClick = () => {
    setIsVisible(false);
  };


  const DefaultTooltipContent = (
    <div className='default-content-tooltip'>
      <div className='default-content-tooltip-close' onClick={handleCloseClick}>
        <img src={CloseIcon} alt='Close Icon'/>
      </div>
          <div className='default-content-tooltip-header'>
            <div className='default-content-tooltip-badge-container'>
            <h1 >{title}</h1>
            {tag && <div className='default-content-tooltip-badge'>New</div>}
            </div>
            <p >{caption}</p>
            {button && <a href={hyperLink} target='_blank' rel='noreferrer' className='default-content-tooltip-view'>View Detail</a>}
          </div>
      </div>
  );

  const ChartTooltipContent = (
    <div className='chart-content-tooltip'>
      <h1>{title}</h1>
      <p>{caption}</p>
    </div>
  );

  const { component: Component } = TooltipsGetType(type) || {};
  if (!Component) return null;

  const tooltipContent = type === 'default' ? DefaultTooltipContent : (type === 'chart' ? ChartTooltipContent : content);
  const tooltipTitle = type === 'table' ? title : null; 


  return (
    <Component content={tooltipContent}
      title={tooltipTitle} placement={state} color={mainColor || (type === 'default' ? '#ffff' : '#1D1D1D')} trigger={trigger} open={isVisible} onOpenChange={setIsVisible} style={style} className={className} {...props}>
      {children}
    </Component>
  );
};

Tooltips.propTypes = {
  type: PropTypes.oneOf(['table', 'chart', 'default']).isRequired, // Adjusted the prop types
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.node,
  caption: PropTypes.string,
  tag: PropTypes.bool,
  trigger: PropTypes.string,
  state: PropTypes.oneOf(['top', 'right', 'bottom', 'left', 'topRight', 'topLeft', 'bottomRight', 'bottomLeft', 'rightTop', 'rightBottom', 'leftTop', 'leftBottom']).isRequired,
  button: PropTypes.bool,
  hyperLink: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,

};

Tooltips.defaultProps = {
  type: 'default',
  title: null,
  content: null,
  children: null,
  caption: null,
  tag: true,
  trigger: 'hover',
  state: 'top',
  button: true,
  hyperLink: null,
  style: null,
  className: null,
};

export default Tooltips;
