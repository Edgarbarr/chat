import styled from "styled-components";

export const ChangePassword = styled.div`
display: flex;
width: 100%;
min-height: 100vh;
background-color:yellow;
flex-direction: row;
background-color: #FF3CAC;
background-image: linear-gradient(45deg, #FF3CAC 0%, #784BA0 33%, #2B86C5 66%, #ffffff 100%);
background-position: center center;
background-size: cover;
padding: 15px;

form {
    background-color: white;
    display: flex;
    flex-direction: column;
    margin: auto;
    height: fit-content;
    width: fit-content;
    padding: 10px;
    border-radius: 4px;
    align-items: center;
    width: 100%;
    max-width: 500px;
}

input {
    border-radius: 25px;
    margin: 45px 0;
    background-color: #8A2BE2;
    padding: 10px 25px;
    color: white;
    outline: none;
    border: none;
    width: fit-content;
    :hover {
        background-color: #8B008B;
    }
}
`;