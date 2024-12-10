import React from 'react';
import { Spin } from 'antd';

const PageLoader = ({ tip = "Loading...", size = "large" }) => {
  return (
    <div style={styles.loaderContainer}>
      <Spin tip={tip} size={size} />
    </div>
  );
};

const styles = {
  loaderContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60vh',
    width: '100%',
  },
};

export default PageLoader;
