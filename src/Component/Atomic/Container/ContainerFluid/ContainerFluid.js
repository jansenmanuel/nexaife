import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContainerFluid = styled.div`
  height: ${(props) => props.height};
  max-height: ${(props) => props.maxHeight};
  min-height: ${(props) => props.minHeight};
  width: 100%;
  overflow: hidden;
  background: ${(props) => props.bg};
  margin-right: 0;
  margin-left: 0;
`;
export default ContainerFluid;

ContainerFluid.propTypes = {
  height: PropTypes.string,
  maxHeight: PropTypes.string,
  minHeight: PropTypes.string,
  bg: PropTypes.string,
};

ContainerFluid.defaultProps = {
  height: "",
  maxHeight: "",
  minHeight: "",
  bg: "#FFF",
};
