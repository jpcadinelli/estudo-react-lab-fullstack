import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Saudacao({ nome }) {
    return <h2>Bem-vindo(a), { nome }!</h2>
}

function App() {
    return (
        <div >
            <Saudacao nome={ "Tássio" } />
            <Saudacao nome={ "Turma UNIVASS" } />
        </div >
    )
}

export default App
