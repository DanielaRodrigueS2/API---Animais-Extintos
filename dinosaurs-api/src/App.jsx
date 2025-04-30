import { useState } from 'react'
import { useReducer } from 'react'

const estadoInicial = {

  filtros:{
    nome_cientifico: '',
    nome_popular: '',
    localizacao: '',
    link: '',
    data: '',
    img: '',
    descricao: '',
  },
  resultados: [],
  status: false,
  erro: null,

}

const reducer =  (state, action) =>{


}

function App() {
  

  return (
    <div>
      <h1>Teste</h1>
    </div>
  )

}

export default App
