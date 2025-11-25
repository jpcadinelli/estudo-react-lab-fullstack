import { useState } from 'react'

export default function Contador() {
    const [count, setCount] = useState(0) 
    const [pessoa, setPessoa] = useState({id:0, nome:"Tássio", idade:33, cidade:"Três Rios"})

    function alterarNome() {
        setPessoa(pessoaPrevia => ({...pessoaPrevia, nome: "Auad", idade: pessoaPrevia.idade + 1}) );
        setCount(count + 1);
    }

    return (
    <div>
        <h1>Nome da Pessoa: {pessoa.nome}</h1>
        <p>Idade: {pessoa.idade}</p>
        <p>Contador: {count}</p>
        <button onClick={alterarNome}>+</button>
    </div>
    )
}