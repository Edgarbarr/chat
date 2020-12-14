import styled from "styled-components";
export const Dashboard = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  height: 100vh;
  padding: 10px;
  position: relative;
  max-width: 2300px;
  margin: auto;
  justify-content: center;
  overflow: hidden;
  @media screen and (max-width: 425px) {
    flex-direction: row;
    padding: 0;
    position: relative;
    justify-content: unset;
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
    width: fit-content;
    height: 100%;
    position: relative;
    z-index: 2;
    box-shadow: 3px 3px 5px #00000059;
    background-color: #496277;
    position: relative;
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
