import './MinutoAtual.css'

const MinutoAtual = () => {
    const hoje = new Date();
    return <><div className="minutoAtual">{hoje.getMinutes()}</div></>
}

export default MinutoAtual;