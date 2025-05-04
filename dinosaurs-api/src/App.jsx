
import { useReducer , useEffect} from 'react'
import {useForm} from 'react-hook-form'

const estadoInicial = {

  filtros:{
    Nome_cientifico: '',
    Nome_popular: '',
    Localizacao: '',
    Data:'',
    Reino:'',

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
  const {register,handleSubmit,watch,formState: {errors},} = useForm()

  const onSubmit = (data) => {
    dispatch({type: 'SET_FILTROS', payload: data})
  }

  useEffect(() =>{
    
  },[state.filtros])
  

  return (
    <div className='geral'>
      <div className='header'>
        <form onSubmit={handleSubmit(onSubmit)}> 
          <input {...register('Nome_Cientifico')} placeholder='Nome Cientifico'/>
          <input {...register('Nome_Popular', {required: true, maxLength: 25})} placeholder='Nome Popular'/>
          {errors.nome_popular && <span>Valor inválido</span>}
          <input {...register('Localizacao')} placeholder='Localizacao'/>
          <input type='number'{...register('Data', {min: 1000, max: 2025})} placeholder='Data'/>
          <select {...register('Reino', {required: true})}>
            <option value='Fungi'>Fungi</option>
            <option value='Animalia'>Plantae</option>
            <option value='Plantae'>Animalia</option>
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
