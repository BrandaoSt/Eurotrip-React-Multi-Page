import React from 'react'
import { useEffect, useState, useRef } from "react"
import Api from '../service/Api'
import '../css/Register.css'

function Register() {
    const [estados, setEstados] = useState([])
    const [cidades, setCidades] = useState([])

    useEffect(() => {
        Api.get('/estados').then(response => {
            setEstados(response.data);
        })
    }, []);

    useEffect(() => {
        Api.get('/estados/1/cidades').then(response => {
            setCidades(response.data);
        })
    }, []);


    const [campos, setCampos] = useState({
        nome: '',
        email: '',
        tipo: '',
        cpfOuCnpj: '',
        logradouro: '',
        numero: '',
        complemento: '',
        bairro: '',
        cep: '',
        telefone1: '',
        estadoId: '0',
        cidadeId: '0',
        senha: ''
    })

    function handleInputChange(event) {
        campos[event.target.name] = event.target.value;
        setCampos(campos);
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log(campos);
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        Api.post('/usuarios', campos).then(response => {
            alert(response.data.dados.length + ' cadastros!');
        })
    }

    return (

        <div className='register'>
            <div className='text-center'>
                <h1>Criar conta</h1>
            </div>
            <form onSubmit={handleFormSubmit}>
                <div className='align text-center mb-4 text-secondary'>
                    <div className="form-check form-check-inline d-inline-block">
                        <input className="form-check-input-radio" type="radio" name="tipo" id="tipo" value="1" onChange={handleInputChange} />
                        <label className="form-check-label">Pessoa Física</label>
                    </div>
                    <div className="form-check form-check-inline d-inline-block">
                        <input className="form-check-input-radio" type="radio" name="tipo" id="tipo" value="2" onChange={handleInputChange} />
                        <label className="form-check-label">Pessoa Jurídica</label>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-4'>
                        <div className="form-group">
                            <input onChange={handleInputChange} name='nome' id='nome' type="text" className="form-control" placeholder="Nome" />
                            <div className='line'></div>
                        </div>
                        <div className="form-group">
                            <input onChange={handleInputChange} name='email' id='email' type="text" className="form-control" placeholder="Email" />
                            <div className='line'></div>
                        </div>
                        <div className="form-group">
                            <input onChange={handleInputChange} name='cpfOuCnpj' id='cpfOuCnpj' type="text" className="form-control" placeholder="CPF ou CNPJ" />
                            <div className='line'></div>
                        </div>
                        <div className="form-group">
                            <input onChange={handleInputChange} name='telefone1' id='telefone1' type="text" className="form-control" placeholder="Telefone" />
                            <div className='line'></div>
                        </div>
                        <div className="form-group">
                            <input onChange={handleInputChange} name='logradouro' id='logradouro' type="text" className="form-control" placeholder="Logradouro" />
                            <div className='line'></div>
                        </div>
                        <div className="form-group">
                            <input onChange={handleInputChange} name='numero' id='numero' type="text" className="form-control" placeholder="Número" />
                            <div className='line'></div>
                        </div>
                        <div className="form-group">
                            <input onChange={handleInputChange} name='complemento' id='complemento' type="text" className="form-control" placeholder="Complemento" />
                            <div className='line'></div>
                        </div>
                        <div className="form-group">
                            <input onChange={handleInputChange} name='bairro' id='bairro' type="text" className="form-control" placeholder="Bairro" />
                            <div className='line'></div>
                        </div>
                        <select name='estadoId' id='estadoId' className="form-select" aria-label="">
                            <option value='0'>Selecione o Estado</option>
                            {estados.map(estado => (<option key={estado.id} value={estado.id}>{estado.nome}</option>))}
                        </select>
                        <select onChange={handleInputChange} name='cidadeId' id='cidadeId' className="form-select" aria-label="">
                            <option value='0'>Selecione a cidade</option>
                            {cidades.map(cidade => (<option key={cidade.id} value={cidade.id}>{cidade.nome}</option>))}
                        </select>
                        <div className="form-group">
                            <input onChange={handleInputChange} name='cep' id='cep' type="text" className="form-control" placeholder="CEP" />
                            <div className='line'></div>
                        </div>
                        <div className="form-group">
                            <input onChange={handleInputChange} name='senha' id='senha' type="password" className="form-control" placeholder="Senha" />
                            <div className='line'></div>
                        </div>

                        <button className='btn-forgot forgot-btn' type="submit">Enviar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Register