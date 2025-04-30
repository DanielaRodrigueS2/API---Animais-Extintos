import { useState } from 'react'
import { useReducer } from 'react'

const estadoInicial = {

  filtros:{
    nome_cientifico: '',
    nome_popular: '',
    localizacao: '',
    data: '',

  },
  resultados: [],
  status: 'carregando' | 'sucesso' | 'erro',
  erro: null,

}

const reducer =  (state, action) =>{
  switch (action.type) {

    case 'SET_FILTROS':
      return{
        ...state,
        filtros : action.payload,
      };

    case 'SET_RESULTADOS':
      return{
        ...state,
        resultados: action.payload,
        status: 'sucesso',
        erro: null
      };

    case 'SET_CARREGANDO':
      return{
        ...state,
        status: 'carregando'
      };

    case 'SET_ERRO':
      return{
        ...state,
        erro: action.payload,
        status: 'erro'
      };
  
    default:
      return state;

  }

}

function App() {
  
  const [state, dispatch] = useReducer(reducer, estadoInicial)

  return (
    <div>
      <h1>Teste</h1>
    </div>
  )

}

export default App
