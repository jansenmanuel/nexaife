import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import style from './InfoCard.module.scss';
import ButtonV223 from '../../Atomic/Button/Button';
import { useTranslation } from 'react-i18next';

const NotificationBody = ({ description }) => {
  const [expanded, setExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const descriptionRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const handleResize = () => {
      if (descriptionRef.current) {
        const lineHeight = parseInt(window.getComputedStyle(descriptionRef.current).lineHeight, 10);
        const maxHeight = lineHeight * 3; 
        const offsetHeight = descriptionRef.current.offsetHeight;
        const scrollHeight = descriptionRef.current.scrollHeight;

        setIsOverflowing(scrollHeight > maxHeight && offsetHeight >= maxHeight);
      }
    };

    handleResize();

    if (descriptionRef.current) {
      const resizeObserver = new ResizeObserver(() => handleResize());
      resizeObserver.observe(descriptionRef.current);

      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [description]);

  return (
    <div className={style.notificationBody}>
      <p
        id="description"
        ref={descriptionRef}
        className={style.description}
        style={expanded ?
          {
            WebkitLineClamp: 'unset',
            WebkitBoxOrient: 'vertical',
            display: '-webkit-box',
            overflow: 'unset',
          } :
          {
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            display: '-webkit-box',
            overflow: 'hidden',
          }
        }>
        {description}
      </p>
      {isOverflowing && (
        <ButtonV223
          buttonType="link"
          size="md"
          onClick={() => setExpanded(prev => !prev)}
          className={style.seeMoreButton}
          label={expanded ? t("COMMON:INFORMATION_CARD.SEE_LESS") : t("COMMON:INFORMATION_CARD.SEE_MORE")}
        />
      )}
    </div>
  );
};

NotificationBody.propTypes = {
  description: PropTypes.string.isRequired,
};

export default NotificationBody;
