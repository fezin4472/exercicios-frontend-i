import './VerificarIdade.css'

const VerificarIdade = () => {
    const miIdade = 24;
    const mnIdade = 16;

    return <>
        <div className='maiorIdade'>{miIdade} anos, é maior de idade</div>
        <div className='menorIdade'>{mnIdade} anos, é menor de idade</div>
    </>;
}

export default VerificarIdade;