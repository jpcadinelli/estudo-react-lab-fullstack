import reactLogo from './assets/react.svg'
import './App.css'

function Saudacao({ nome }) {
    return <h2 className="titulo-dois" >Bem-vindo(a), { nome }!</h2>
}

function App() {
    return (
        <div >
            <img src={ reactLogo } Alt="Logo do react" />
            <Saudacao nome={ "Tássio" } />
            <Saudacao nome={ "Turma UNIVASS" } />
        </div >
    )
}

export default App
