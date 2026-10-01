import './HoraAtual.css'

const HoraAtual = () => {
    const hoje = new Date();
    return <><div className="horaAtual">{hoje.getHours()}</div></>;
}

export default HoraAtual;