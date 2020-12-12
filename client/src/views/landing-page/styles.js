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
  max-width: 2300px;
  margin: auto;

  .main {
    display: flex;
    width: 60%;
    height: auto;
    background-color: transparent;
    background-image: url("https://images.pexels.com/photos/4559747/pexels-photo-4559747.jpeg?cs=srgb&dl=pexels-ketut-subiyanto-4559747.jpg&fm=jpg");
    background-position: center;
    background-size: cover;
    @media screen and (max-width: 760px) {
      width: 0;
      display: none;
    }
    h1 {
      font-size: 50px;
      color: white;
      width: 50%;
      padding: 75px;
      text-align: center;
      font-variant-caps: small-caps;
      font-weight: 900;
      -webkit-text-stroke: 1px black;
    }
    @media screen and (min-width: 2500px) {
      h1 {
        font-size: 120px;
        width: 50%;
        padding: 100px;
      }
    }
  }
  form {
    box-shadow: 2px 0 5px black;
    z-index: 1;
  }
  .aside {
    display: flex;
    width: 40%;
    height: auto;
    background-color: white;
    overflow: auto;
    @media screen and (max-width: 760px) {
      width: 100%;
    }
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
