import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"import "./App.css";
		  import React from "react";
		  import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
		  
		  import Login from "./paginas/login";
		  import Home from "./paginas/home";
		  import Cadastro from "./paginas/cadastro";
		  import AdicionarCliente from "./paginas/adicionar_cliente";
		  import Clientes from "./paginas/clientes";
		  import Cobrancas from "./paginas/cobranças";
		  import CriarCobranca from "./paginas/criar_cobrança";
		  import Deslogar from "./paginas/deslogar";
		  import EditarCliente from "./paginas/editar_cliente";
		  import EsqueciMinhaSenha from "./paginas/esqueci-minha-senha";
		  
		  //preciso importar com letra maiuscula
		  
		  //segredinho pra ser exibido um de cada vez
		  //criar rotas
		  
		  function App() {
			return (
			  <Router>
				<Switch>
				  <Route path="/cadastro">
					<Cadastro />
				  </Route>
		  
				  <Route path="/deslogar">
					<Deslogar />
				  </Route>
		  
				  <Route path="/criar_cobranca">
					<CriarCobranca />
				  </Route>
		  
				  <Route path="/cobrancas">
					<Cobrancas />
				  </Route>
		  
				  <Route path="/esqueciminhasenha">
					<EsqueciMinhaSenha />
				  </Route>
		  
				  <Route path="/clientes">
					<Clientes />
				  </Route>
		  
				  <Route path="/adicionarcliente">
					<AdicionarCliente />
				  </Route>
		  
				  <Route path="/editarcliente">
					<EditarCliente />
				  </Route>
		  
				  <Route path="/login">
					<Login />
				  </Route>
		  
				  <Route path="/">
					<Home />
				  </Route>
				</Switch>
			  </Router>
			);
		  }
		  
		  export default App;
		  
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
