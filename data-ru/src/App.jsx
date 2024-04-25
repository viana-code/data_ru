import React from 'react';
import './assets/styles/css/global.css';
import 'animate.css';

//Funcoes

import { Hora } from './functions/obterHora';

//Componentes
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';


function App() {
  const horaSystem = Hora();
  
  return (
    <>

    <Header hora={horaSystem}/>
    <Main/>

    </>
  );
}

export default App;
