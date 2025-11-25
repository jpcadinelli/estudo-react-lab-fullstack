export default function ProdutoItem ({ produto }) {
    return (
        <li >
            <strong >{ produto .nome }</strong >
            <span > — R$ { produto .preco. toFixed (2)}</span >
        </li >
    )
}