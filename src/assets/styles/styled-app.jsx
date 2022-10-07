import styled from "styled-components"
import reactlogo from "../Public/React.svg"

export const Wrapper = styled.div `
    width: 90vw;
    height: 90vh;
    background: #fff;
    box-shadow: 0px 0px 6px rgba(0,0,0,0.4);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: none;
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    ::before {
        content: "";
        position: absolute;
        top: 0px;
        left: 0px;
        width: 50%;
        height: 100%;
        background: #4361ee;
    }
`;

export const LeftContant = styled.div `
    width: 30%;
    height: 80%;
    background: none;
    position: relative;
    left: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: none;
    ::after {
        content: "";
        width: 200px;
        height: 200px;
        background-image: none;
        position: absolute;
        top: 0%;
        left: 36%;
        border-radius: 12px;
    }

`;

export const Tittle = styled.h1 `
    color: #4361ee;
    font-size: 36px;
    font-family: 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;

export const Inputs = styled.input `
    width: 100%;
    height: 30px;
    background: #fff;
    border: 2px solid #4361ee;
    border-radius: 6px;
    margin: 12px;
`;

export const Button = styled.button `
    background: #4361ee;
    color: #fff;
    width: 20%;
    height: 6%;
    border: none;
    border-radius: 6px;
    align-self: flex-end;
    :hover {
        cursor: pointer;
    }
`;

export const MensageError = styled.span `
    align-self: flex-start;
    color: red;
    font-size: 0.8rem;
`;

export const Image = styled.image`
    background-image: url(${reactlogo});
    background-repeat: no-repeat;
    width: 800px;
    height: 800px;
    position: absolute;
    top: 26%;
    left: 8%;
`;