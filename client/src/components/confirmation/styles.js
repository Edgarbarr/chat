import styled from "styled-components";

export const Confirmation = styled.div`
    display: none;
    width: 100%;
    height: 100%;
    top: 0; 
    left: 0;
    position: absolute;
    min-height: 100vh;
    background-color: #8080808c;
    flex-direction: row;
    z-index: 3;

    div {
        background-color: white;
        display: flex;
        flex-direction: column;
        position: relative;
        margin: auto 5%;
        height: fit-content;
        width: fit-content;
        padding: 10px;
        border-radius: 4px;
        align-items: center;
        padding: 40px;
        z-index:5
        text-align: center;


        h1 {
            text-align: center;
        }
        button {
            position: absolute;
            top: 0;
            left: 0;
            color: white;
            outline: none;
            border: none;
            width: 35px;
            height: 35px;
            margin: 10px;
            background-color: transparent;
            :hover {
                background-color: transparent;
            }
            
        }
        .resend-confirm {
            display: flex;
            position: static;
            border-radius: 25px;
            margin: 45px 0;
            background-color: #8A2BE2;
            padding: 10px 25px;
            color: white;
            outline: none;
            border: none;
            text-align: center;
            :hover {
                background-color: #8B008B;
            }
    }
   
`;