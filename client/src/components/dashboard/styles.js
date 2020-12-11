import styled from "styled-components";

export const Dashboard = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  height: 100vh;
  padding: 10px;
  position: relative;
  max-width: 2300px;

  @media screen and (max-width: 425px) {
    flex-direction: column;
    padding: 0;
  }
  h1,
  h2 {
    font-size: 50px;
    margin: 50px 25px;
  }
  h2 {
    font-size: 25px;
  }
  .main-div {
    border-radius: 8px;
    color: white;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 2;
    box-shadow: 3px 3px 5px #00000059;
    background-color: #496277;

    @media screen and (max-width: 425px) {
      background-color: #6c8da9;
      padding-top: 200px;
      border-radius: 0;
      h1,
      h2 {
        text-align: center;
        z-index: 2;
      }
    }
  }
`;
