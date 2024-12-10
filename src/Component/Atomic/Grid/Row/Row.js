import styled from 'styled-components';

const Row = styled.div`
  width: 100%;
  --bs-gutter-x: 0;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(1 * var(--bs-gutter-x));
  margin-left: calc(1 * var(--bs-gutter-x));
  align-items:center
`;
export default Row;
