import styled from 'styled-components';

export const FormInput = styled.div`
width: 80%;
.group {
    margin: 45px 0;
    position: relative;
    ::before {
        content: "${props => props.error}";
        position: absolute;
        top: 110%;
        margin: auto;
        margin-top: 5px;
        z-index: 10;
        background-color: #000;
        background-color: hsla(0, 0%, 20%, 0.5);
        color: white;
        width: fit-content;
        max-width: 226px;
        height: fit-content;
        padding: 10px 15px;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        border-radius: 10px;
        display: ${props => props.error ? "flex" : "none"};
        text-align: center;
    }
    ::after {
        position: absolute;
        top: 110%;
        left: 50%;
        margin-left: -5px;
        width: 0;
        border-bottom: 5px solid #000;
        border-bottom: 5px solid hsla(0, 0%, 20%, 0.5);
        border-right: 5px solid transparent;
        border-left: 5px solid transparent;
        content: " ";
        font-size: 0;
        line-height: 0;
        display: ${props => props.error ? "flex" : "none"};
    }
    .form-input {
        background: none;
        background-color: white;
        color: black;
        font-size: 18px;
        padding: 10px 5px;
        display: block;
        width: 100%;
        border: none;
        border-radius: 0;
        border-bottom: 1px solid #b68f40;
        margin: 25px 0;
        transition: background-color .4s;
        letter-spacing: ${props => (props.type === "password") ? ".6em" : null};
        transition: all .6s cubic-bezier(.2, 1, .2, 1);
        opacity: 0;
        transform: scale(0);
        animation-fill-mode: forwards;
        animation-name: enter;
        animation-duration: .5s;
        padding-right: ${props => (props.type === "password") ? "30px" : null};
        @keyframes enter {
            from {opacity: 0;
            transform: scale(0)}
            to {opacity: 1;
            transform: scale(1)}
          }

        :focus{
            outline: none;
            background-color: white;
        }
        :focus ~ .form-input-label {
            top: -14px;
            font-size: 12px;
            color: ${props => (props.isValidating) ? (props.error) ?  "red" : "green" : "darkgrey"}
        }
    }
    .form-input-label {
        color: ${props => (props.isValidating) ? (props.error) ?  "red" : "green" : "black"};
        font-size: 16px;
        font-weight: normal;
        position: absolute;
        pointer-events: none;
        left: 5px;
        top: 10px;
        transition: 300ms ease all;

        &.shrink {
            top: -14px;
            font-size: 12px;
            color:  ${props => (props.isValidating) ? (props.error) ?  "red" : "green" : "black"};
        }
    }
    .show-password {
        position: absolute;
        right: 0;
        top: 20%;
        cursor: pointer;
        img {
            height: 25px;
            width: 25px;
        }
    }
}
`;
