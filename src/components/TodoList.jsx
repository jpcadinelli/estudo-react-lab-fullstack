import { useState } from 'react'

export default function Todos() {
    const [txt, setTxt] = useState('')
    const [todos, setTodos] = useState([])

    function add() {
        const t = txt.trim()
        if (!t) return
        setTodos(prev => ([...prev, { id: Date.now(), done: false, t }]))
        setTxt('')
    }

    function remover(id) {
        setTodos(prev => prev.filter(x => x.id !== id))
    }

    function toggle(id) {
        setTodos(prev => prev.map(x => x.id === id ? { ...x, done: !x.done } : x))
    }

    return (
        <div>
            <input value={txt} onChange={e => setTxt(e.target.value)} />
            <button onClick={add}>Adicionar</button>
            <ul>
                {todos.map(item =>
                    <li key={item.id}>
                        <label>
                            <input type="checkbox"
                                   checked={item.done}
                                   onChange={() => toggle(item.id)} />
                            {item.done ? <s>{item.t}</s> : item.t}
                        </label>
                        <button onClick={() => remover(item.id)}>Remover</button>
                    </li>
                )}
            </ul>
        </div>
    )
}
