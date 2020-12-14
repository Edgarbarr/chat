import styled from "styled-components";

export const Nav = styled.div`
  z-index: 5;
  ul {
    height: fit-content;
    padding: 20px 10px;
    background-color: white;
    margin: 0;
    background-color: cadetblue;
    border-radius: 8px;
    margin-right: 10px;
    list-style: none;
    padding-right: 0;
    .active {
      background-color: white;
      border-top-left-radius: 25px;
      border-bottom-left-radius: 25px;
    }
    @media screen and (max-width: 425px) {
      .active {
        border-radius: 25px;
      }
    }

    li {
      padding-right: 10px;
      margin: 20px 0;

      :hover {
        img {
          filter: invert(87%) sepia(21%) saturate(4739%) hue-rotate(345deg)
            brightness(90%) contrast(88%);
        }
      }
      @media screen and (max-width: 425px) {
        :hover {
          img {
            filter: unset;
          }
        }
        padding-right: 0;
      }
    }
    @media screen and (max-width: 425px) {
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: center;
      align-items: center;
      border-radius: 0;
      border-bottom-left-radius: 75px;
      position: fixed;
      top: 0;
      ::after {
        content: "";
        position: fixed;
        top: 150px;
        right: 0;
        width: 75px;
        height: 75px;
        border-radius: 0 125px 0px 0;
        background-color: transparent;
        box-shadow: 20px -20px 0px 20px cadetblue;
      }
    }
  }
  img {
    height: 40%;
    width: 40%;
  }
  button,
  .link {
    border: none;
    height: 70px;
    width: 70px;
    background-color: transparent;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
