import styled from 'styled-components';

const Col = styled.div`
  flex: 0 0 auto;
  padding: 20px;
  width: ${(props) => {
    if (props.width === 1) {
      return "8.33333333%";
    } else if (props.width === 2) {
      return "16.66666667%";
    } else if (props.width === 3) {
      return "25%";
    } else if (props.width === 4) {
      return "33.33333333%";
    } else if (props.width === 5) {
      return "41.66666667%";
    } else if (props.width === 5.5) {
      return "45.833333%";
    } else if (props.width === 6) {
      return "50%";
    } else if (props.width === 7) {
      return "58.33333333%";
    } else if (props.width === 8) {
      return "66.66666667%";
    } else if (props.width === 9) {
      return "75%";
    } else if (props.width === 10) {
      return "83.33333333%";
    } else if (props.width === 11) {
      return "91.66666667%";
    } else {
      return "100%";
    }
  }};
  @media (max-width: 576px) {
    flex: 0 0 auto;
    width: ${(props) => {
      if (props.size === "sm") {
        return "100%";
      } else {
        return "";
      }
    }};
  }
  @media (max-width: 768px) {
    flex: 0 0 auto;
    width: ${(props) => {
      if (props.size === "md") {
        return "100%";
      } else {
        return "";
      }
    }};
  }

  @media (max-width: 992px) {
    flex: 0 0 auto;
    width: ${(props) => {
      if (props.size === "lg") {
        return "100%";
      } else {
        return "";
      }
    }};
  }
`;

export default Col;
