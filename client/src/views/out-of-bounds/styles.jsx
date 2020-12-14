import styled from "styled-components";

export const OutOfBounds = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #ff3cac;
  background-image: linear-gradient(
    45deg,
    #ff3cac 0%,
    #784ba0 33%,
    #2b86c5 66%,
    #ffffff 100%
  );
  background-position: center center;
  background-size: cover;
  h1,
  h3 {
    color: white;
  }
`;
