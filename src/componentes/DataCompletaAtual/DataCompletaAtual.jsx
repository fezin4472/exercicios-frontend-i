import './DataCompletaAtual.css'

const DataCompletaAtual = () => {
    const hoje = new Date();
    return <><div className="dataCompletaAtual">{hoje.getDate()}/{hoje.getMonth() +1}/{hoje.getFullYear()} {hoje.getHours()}:{hoje.getMinutes()}</div></>
}

export default DataCompletaAtual;