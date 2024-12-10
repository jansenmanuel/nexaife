import styled from 'styled-components';

const Td = styled.td`
  width: ${(props) => props.width};
  text-align: ${(props) => props.textAlign};
  padding: ${(props) => props.padding};
`;
export default Td;

Td.defaultProps = {
  width: "50px",
  textAlign: "left",
  padding: "15px 5px",
};
