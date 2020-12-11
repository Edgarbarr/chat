import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    .submit-button {
        border-radius: 25px;
        margin: 45px 0;
        background-color: #8A2BE2;
        padding: 10px 25px;
        color: white;
        outline: none;
        border: none;
        cursor: pointer;
        :hover {
            background-color: #8B008B;
        }
    }
`;


