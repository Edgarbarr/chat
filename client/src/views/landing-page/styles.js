import styled from "styled-components";

export const Home = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  flex-direction: row;
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

  .main {
    display: flex;
    width: auto;
    height: auto;
    background-color: transparent;

    
  }
  form {
    box-shadow: 2px 0 5px black;
    z-index: 1;
  }
  .aside {
    display: flex;
    width: 600px;
    height: auto;
    background-color: white;
    overflow: auto;
  }
  button {
    background-color: grey;
    :hover {
      background-color: #909090;
    }
    border: none;
    border-left: 1px solid black;
    height: 100%;
    width: 100px;
    max-width: 20%;
    outline: none;
  }
  button > span {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    color: white;
  }
`;
