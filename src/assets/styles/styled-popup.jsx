import styled from "styled-components"
import aprovacao from "../Public/aprovacao.svg"

export const Wrapper = styled.div `
    background: #fff;
    width: 600px;
    height: 600px;
    z-index: 0;
    box-shadow: 0px 0px 10px rgba(0,0,0,.5);
    position: absolute;
    top: 100px;
    display: none;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: none;
    border-radius: 12px;
`;

export const Tittle = styled.h1 `
    font-size: 30px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: #4361ee;
    font-weight: lighter;
`;


export const Image = styled.image`
    background-image: url(${aprovacao});
    background-repeat: no-repeat;
    width: 100px;
    height: 100px;
    margin-top: 24px;
`;

export const Button = styled.button `
    background: #4361ee;
    color: #fff;
    width: 20%;
    height: 6%;
    border: none;
    border-radius: 6px;
    margin-top: 60px;
    :hover {
        cursor: pointer;
    }
`;