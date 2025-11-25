import { useEffect, useState } from 'react'
import { listarCategorias } from './../services/api'

export default function CatalogoPage() {
    const [dados, setDados] = useState([])
    const [loading, setLoading] = useState(true)
    const [erro, setErro] = useState(null)

    useEffect(() => {
        let ativo = true
        listarCategorias()
            .then(json => ativo && setDados(json))
            .catch(e => ativo && setErro(e.message))
            .finally(() => ativo && setLoading(false))
        return () => { ativo = false }   // cleanup simples evita setState após unmount
    }, []) // [] => roda uma vez após o primeiro render

    if (loading) return <p>Carregando...</p>
    if (erro)    return <p>Erro: {erro}</p>
    return <pre>{JSON.stringify(dados, null, 2)}</pre>
}
