import PropTypes from 'prop-types';
import styled from 'styled-components';

const Thead = styled.thead`
  background: ${(props) => props.fixHeaderBg};
  position: ${(props) => (props.fixHeader ? "sticky" : "")};
  top: ${(props) => (props.fixHeader ? "0" : "")};
  z-index: ${(props) => (props.fixHeader ? "5" : "")};
`;
export default Thead;
Thead.propTypes={
  fixHeaderBg: PropTypes.string,
  fixHeader: PropTypes.bool,
}
Thead.defaultProps = {
  fixHeaderBg:"",
  fixHeader: false,
};

