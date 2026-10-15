import './NumerosPares.css'

const NumerosPares = () => {
    const i = [4, 10, 18, 22, 30, 34]
    return (
        <>
        <ul className='numerosPares'>
            <li>{i[0]}</li>
            <li>{i[1]}</li>
            <li>{i[2]}</li>
            <li>{i[3]}</li>
            <li>{i[4]}</li>
            <li>{i[5]}</li>
        </ul>
        </>
    )
}

export default NumerosPares;