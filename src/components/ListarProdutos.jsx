import ProdutoItem from "./ProdutoItem.jsx";

const produtos = [
    { id: 1, nome: 'Teclado ', preco: 150.90 },
    { id: 2, nome: 'Mouse ', preco: 89.50 },
]

export default function ListaProdutos () {
    return (
        <ul >
            { produtos .map(p => (
                <li key ={p.id}>
                    <ProdutoItem produto={p} />
                </li >
            ))}
        </ul >
    )
}
