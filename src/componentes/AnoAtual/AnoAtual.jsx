import './AnoAtual.css'

const AnoAtual = () => {
    const hoje = new Date();
    return <><div className="anoAtual">{hoje.getFullYear()}</div></>
}

export default AnoAtual;