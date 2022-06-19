import './styles.css'

import cadastrarFrutaImg from '../../assets/cadastrar-fruta.svg'
import { Modal } from '../../components/LayoutComponents/modal'
import { useState, useEffect } from 'react'
import { api } from '../../service/api'

export const Painel = () => {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [produtos, setProdutos] = useState()

    useEffect(() => {
        async function handleProdutos () {
            const response = await api.get('/produtos')
            setProdutos(response.data)
        }
        handleProdutos()
    }, [isOpenModal])

    const closeModal = () => {
        setIsOpenModal(false)
    }

    return (
    <div className='container-geral'>
       <div className='container-painel'>
        <h1>Painel administrativo</h1>
        <div className='options-container'>
            <button onClick={() => {
                setIsOpenModal(true)
            }} className="options">
                <div className='option-img'>
                    <img src={cadastrarFrutaImg} alt="" />
                </div>
                <p>Nova fruta</p>
            </button>
            <button className="options">
                <div className='option-img'>
                    <img src={cadastrarFrutaImg} alt="" />
                </div>
                <p>Meus clientes</p>
            </button>
            <button className="options">
                <div className='option-img'>
                    <img src={cadastrarFrutaImg} alt="" />
                </div>
                <p>Relatórios</p>
            </button>
            <button className="options">
                <div className='option-img'>
                    <img src={cadastrarFrutaImg} alt="" />
                </div>
                <p>Minhas frutas</p>
            </button>
        </div>

        <div className="container-produto">
        <table>
            <thead>
            <tr>
                <th>Nome</th>
                <th>Preço</th>
                <th>Data</th>
            </tr>
            </thead>
            <tbody>
            {produtos?.map(produto => (
            <tr key={produto.id}>
                <td>{produto.nome}</td>
                <td>
                    {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                    }).format(produto.preco)}
                </td>
                <td>
                {new Intl.DateTimeFormat('pt-BR').format(
                    new Date('2022-06-19')
                )}
                </td>
            </tr>
            ))}
            </tbody>
        </table>
        </div>
       </div>

       { isOpenModal && <Modal 
        closeModal={closeModal}
       /> }
    </div>
    )
}