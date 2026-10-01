import './MesAtual.css'

const MesAtual = () => {
    const hoje = new Date()
    return <><div className="mesAtual">{hoje.getMonth() +1}</div></>
}

export default MesAtual;