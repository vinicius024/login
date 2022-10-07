import React from "react"
import { Wrapper, Tittle, Image, Button } from "../styles/styled-popup"

export default function Popup() {
    return(
        <Wrapper id="popup">
            <Tittle>Você conseguiu fazer login</Tittle>
            <Tittle>PARABÉNS</Tittle>
            <Image/>
            <Button onClick={() => {
                
                const popup = document.getElementById('popup');
                popup.style.display = "none"
            }}>Fechar</Button>
        </Wrapper>
    );
}