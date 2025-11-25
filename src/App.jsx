import './App.css'
import Saudacao from './Saudacao'
import Contador from './Contador'
import FormEmail from './FormEmail'
import Todos from './components/TodoList'

function App() {

  return (
    <>
      <h1>Seja Bem-Vindo!</h1>
      <p>Meu primeiro app react</p>
      <Saudacao />
      <Contador />
      <FormEmail />
      <Todos />
    </>
  )
}

export default App
