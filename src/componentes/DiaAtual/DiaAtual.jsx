import './DiaAtual.css'

const DiaAtual = () => {
    const hoje = new Date();
    return <><div className="diaAtual">{hoje.getDate()}</div></>
}

export default DiaAtual;