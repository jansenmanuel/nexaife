import styled from 'styled-components';

const Th = styled.th`
  width: ${(props) => props.width};
  text-align: ${(props) => props.textAlign};
  padding: ${(props) => props.padding};
`;
export default Th;

Th.defaultProps = {
  width: "50px",
  textAlign: "left",
  padding: "15px 5px",
};
