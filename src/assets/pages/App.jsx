import { useEffect, useState } from 'react'
import { Wrapper, Inputs, Tittle, Button, LeftContant, MensageError, Image } from "../styles/styled-app"
import Modal from "./Popup"

export default function App() {

  const [error, setError] = useState({
    Email: "",
    Senha: ""
  }); 

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");


  function handleChangeEmail(event){

    let email = event.target.value;

    setEmail(email);
  }

  function handleChangeSenha(event){

    let senha = event.target.value;

    setSenha(senha);
  }
  
  function validate() {

    //validação de Email
    let Email = document.getElementById("Email");

    if(email.includes('@') && email.includes('.com')){
      Email.innerHTML = ""
      const popup = document.getElementById('popup');

      popup.style.display = "flex"
    }else {
      Email.innerHTML = "Email Invalido"
      const popup = document.getElementById('popup');

      popup.style.display = "none"

      return
    }
    //Validação de Senha
    let Senha = document.getElementById("Senha");

    if(senha.length >= 8){
      Senha.innerHTML = ""
      const popup = document.getElementById('popup');

      popup.style.display = "flex"
    }else {
      Senha.innerHTML = "Senha muito curta"

      const popup = document.getElementById('popup');

      popup.style.display = "none"

    }
  }

  return (
    <Wrapper>
      <LeftContant>
        <Tittle>Faça login</Tittle>
        <Inputs type="text" onChange={handleChangeEmail} required/>
        <MensageError id='Email'>{error.Email}</MensageError>
        <Inputs type="password" onChange={handleChangeSenha} required/>
        <MensageError id='Senha'>{error.Senha}</MensageError>
        <Button onClick={validate}>Entrar</Button>
      </LeftContant>  
      <Image/>
      <Modal id='popup' error={error}/>
    </Wrapper>
  )
}


