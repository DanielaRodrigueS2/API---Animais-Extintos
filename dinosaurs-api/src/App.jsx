
import { useReducer , useEffect, useState} from 'react'
import {useForm} from 'react-hook-form'

const estadoInicial = {

  filtros:{
    Tipo: '',
    Valor: '',
  },
  resultados: [],
  status: 'inical',
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
  const {register,handleSubmit,watch, setValue,} = useForm()
  const [opcoes, setOpcoes] = useState([])

  const watchTipo = watch('Tipo')

  const onSubmit = (data) => {
    dispatch({type: 'SET_FILTROS', payload: data})
  }

  const comunicacao = async () =>{
    dispatch({type: 'SET_CARREGANDO'})
    try{

      let url  = ''

      if(state.filtros.Tipo == 'Ingrediente Principal'){
        url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${state.filtros.Valor}`
      }
      else if(state.filtros.Tipo == 'Categoria'){
        url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${state.filtros.Valor}`
      }
      else if(state.filtros.Tipo == 'Local'){
        url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${state.filtros.Valor}`
      }

      if (!url) return;

      const resposta = await fetch(url)
      const json = await resposta.json()
      dispatch({type: 'SET_RESULTADOS', payload: json.meals || []})
      console.log(state.resultados)

    }
    catch(error){

      dispatch({type: 'SET_ERRO', payload: error.message})
      console.log(state.erro)

    }

  }

  useEffect(() =>{

    if(state.filtros.Valor && state.filtros.Tipo) {
      comunicacao();
    }

  },[state.filtros])

  

  return (
    <div className='geral'>
      <div className='header'>
        <form onSubmit={handleSubmit(onSubmit)}> 
          <input {...register('Valor')} placeholder='Valor'/>
          <select {...register('Tipo', {required: true})}>
            <option value='Ingrediente Principal'>Ingrediente Principal</option>
            <option value='Categoria'>Categoria</option>
            <option value='Local'>Local</option>
          </select>
          <input type='submit'/>
        </form>
      </div>

      <div className='main'>


      </div>
    </div>
  )

}

export default App
