import { useState } from 'react'

export default function FormEmail() {
  const [email, setEmail] = useState('')
  const [erro, setErro] = useState(null)

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.includes('@')) { 
        setErro('Email inválido'); 
        return;
    }
    setErro(null)
    // chamar API aqui...
    alert(`Enviado: ${email}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={e => setEmail(e.target.value)} />
      <button type="submit">Enviar</button>
      {erro && <p style={{color:'crimson'}}>{erro}</p>}
    </form>
  )
}