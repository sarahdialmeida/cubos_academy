import React from "react";
import { Link } from "react-router-dom";
// entre chaves porque estou importando parte dele
import logo from "../../assets/logo.png";
import './style.css';

function Login() {
  function handleSubmit() {
	  console.log('enviado')
  }
	return (
    <div className="container">
      <div className="form">
        <img src={logo} alt="logo da Cubos Academy"></img>
        <form onSubmit = {handleSubmit}>
          <label> 
            Email
            <input name="email" type="email" />
          </label>
          <label>
            Senha
            <input name="senha" type = "senha" />
          </label>
          <Link to="/esqueci-minha-senha"> 'Esqueci minha senha'</Link>
		  <button type = 'submit'>Entrar</button>

        </form>
      </div>
      <div classname="cadastro">
        <p>Não tem uma conta?</p>
        <Link to="/cadastro"> Cadastre-se </Link>
      </div>
    </div>
  );
}

export default Login;

/* spa single page aplication */
