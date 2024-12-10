import PropTypes from 'prop-types';
import styled from 'styled-components';

const Table = styled.table`
  margin: ${(props) => props.margin};
`;
export default Table;
Table.propTypes = {
  margin: PropTypes.string,
};
Table.defaultProps = {
  margin: "0px",
};
