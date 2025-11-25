import viteLogo from '/vite.svg'

function Saudacao() {
    const nome = "Tássio"

    return (
    <>
        <p>Olá, {nome}! Como vai?</p>
        <img src={viteLogo} />
    </>
    )
}

export default Saudacao