import PropTypes from 'prop-types';
import styled from 'styled-components';

const Tfoot = styled.tfoot`
  background: ${props => props.fixHeaderBg};
  position: ${props => (props.fixHeader ? "sticky" : "")};
  bottom: ${props => (props.fixHeader ? "0" : "")};
  z-index: ${props => (props.fixHeader ? "5" : "")};
`;
export default Tfoot;
Tfoot.propTypes = {
  fixHeaderBg: PropTypes.string,
  fixHeader: PropTypes.bool,
};
Tfoot.defaultProps = {
  fixHeaderBg: "",
  fixHeader: false,
};
