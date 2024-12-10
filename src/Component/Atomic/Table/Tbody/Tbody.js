import PropTypes from 'prop-types';
import styled from 'styled-components';

const Tbody = styled.tbody`
  height: ${(props) => props.height};
`;
export default Tbody;
Tbody.propTypes = {
  height: PropTypes.string,
};
Tbody.defaultProps = {
  height: "0px",
};