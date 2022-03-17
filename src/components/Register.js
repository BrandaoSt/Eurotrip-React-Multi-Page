import React from 'react'
import { useRef } from 'react'
import Api from '../service/Api'
import '../css/Register.css'
const Register = () => {

    const nome = useRef()
    const email = useRef()
    const tipo = useRef()
    const cpfOuCnpj = useRef()
    const logradouro = useRef()
    const numero = useRef()
    const complemento = useRef()
    const bairro = useRef()
    const cep = useRef()
    const telefone1 = useRef()
    const estadoId = useRef()
    const cidadeId = useRef()
    const senha = useRef()

    function addUser(event) {
        event.preventDefault()
        Api.post('/usuarios', {
            nome: nome.current.value,
            email: email.current.value,
            tipo: tipo.current.value,
            cpfOuCnpj: cpfOuCnpj.current.value,
            logradouro: logradouro.current.value,
            numero: numero.current.value,
            complemento: complemento.current.value,
            bairro: bairro.current.value,
            cep: cep.current.value,
            telefone1: telefone1.current.value,
            estadoId: estadoId.current.value,
            cidadeId: cidadeId.current.value,
            senha: senha.current.value
        }).then((res) => console.log(res))
            .catch((err) => console.log(err))
    }

    function getEstados(event) {
        event.preventDefault()
        Api.get('/estados', {
            estadosId: estadoId.current.value
        }).then((res) => console.log(res))
            .catch((err) => console.log(err))
    }

    function getCidades(event) {
        event.preventDefault()
        Api.get('/estados/2/cidades', {
            cidadeId: cidadeId.current.value
        }).then((res) => console.log(res))
            .catch((err) => console.log(err))
    }

return (
    <div className='register'>
        <div className='text-center'>
            <h1>Criar conta</h1>
        </div>
        <form onSubmit={addUser}>
            <div className='align text-center mb-4 text-secondary'>
                <div className="form-check form-check-inline d-inline-block">
                    <input className="form-check-input-radio" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label className="form-check-label" for="inlineRadio1">Pessoa Física</label>
                </div>
                <div className="form-check form-check-inline d-inline-block">
                    <input className="form-check-input-radio" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label className="form-check-label" for="inlineRadio2">Pessoa Jurídica</label>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-4'>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Nome" ref={email} />
                        <div className='line'></div>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Email" ref={email} />
                        <div className='line'></div>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="CPF ou CNPJ" ref={cpfOuCnpj} />
                        <div className='line'></div>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Telefone" ref={telefone1} />
                        <div className='line'></div>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Logradouro" ref={logradouro} />
                        <div className='line'></div>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Número" ref={numero} />
                        <div className='line'></div>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Complemento" ref={complemento} />
                        <div className='line'></div>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Bairro" ref={bairro} />
                        <div className='line'></div>
                    </div>
                    <select onSubmit={getEstados} className="form-select" aria-label="Estado" ref={estadoId}>
                        <option selected>Estado</option>
                        <option value="estadoId">{estadoId.nome}</option>
                    </select>
                    <select onSubmit={getCidades} className="form-select" aria-label="Cidade" ref={cidadeId}>
                        <option selected>Cidade</option>
                        <option value="cidadeId">{cidadeId.nome}</option>
                    </select>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="CEP" ref={cep} />
                        <div className='line'></div>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Senha" ref={senha} />
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