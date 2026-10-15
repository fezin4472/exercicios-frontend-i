import './ListaProdutos.css'

const ListaProdutos = () => {
    const produtos = ['Celular Samsung', 'Notebook Acer', 'Smart TV LG', 'Impressora HP', 'Tablet Multilaser', 'Monitor Dell']
    return <>
        <ul className='listaProdutos'>
            <li>{produtos[0]}</li>
            <li>{produtos[1]}</li>
            <li>{produtos[2]}</li>
            <li>{produtos[3]}</li>
            <li>{produtos[4]}</li>
            <li>{produtos[5]}</li>
        </ul>
    </>;
}

export default ListaProdutos;