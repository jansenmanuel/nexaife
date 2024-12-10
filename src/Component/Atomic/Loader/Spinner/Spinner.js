import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

export const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  margin: 0 auto;
  border-top: 2px solid ${(props) => props.borderColor};
  border-right: 2px solid ${(props) => props.borderColor};
  border-bottom: 2px solid ${(props) => props.borderColor};
  border-left: 4px solid ${(props) => props.spinColor};
  background: transparent;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
Spinner.propTypes = {
  borderColor: PropTypes.string,
  spinColor: PropTypes.string,
};

Spinner.defaultProps = {
  borderColor: "#000",
  spinColor: "#000",
};
