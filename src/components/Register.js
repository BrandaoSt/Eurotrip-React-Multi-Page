import React from 'react'
import { useEffect, useState, useRef } from "react"
import Api from '../service/Api'
import '../css/Register.css'

function Register (){
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

return (
    <div className='register'>
        <div className='text-center'>
            <h1>Criar conta</h1>
        </div>
        <form>
            <div className='align text-center mb-4 text-secondary'>
                <div className="form-check form-check-inline d-inline-block">
                    <input className="form-check-input-radio" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label className="form-check-label">Pessoa Física</label>
                </div>
                <div className="form-check form-check-inline d-inline-block">
                    <input className="form-check-input-radio" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label className="form-check-label">Pessoa Jurídica</label>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-4'>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Nome" />
                        <div className='line'></div>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Email"  />
                        <div className='line'></div>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="CPF ou CNPJ"  />
                        <div className='line'></div>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Telefone"  />
                        <div className='line'></div>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Logradouro" />
                        <div className='line'></div>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Número"  />
                        <div className='line'></div>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Complemento" />
                        <div className='line'></div>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Bairro"  />
                        <div className='line'></div>
                    </div>
                    <select name='estadoId' id='estadoId' className="form-select" aria-label="">
                        <option value='0'>Selecione o Estado</option>
                        {estados.map(estado => (<option key={estado.id} value={estado.id}>{estado.nome}</option>))}
                    </select>
                    <select name='cidadeId' id='cidadeId' className="form-select" aria-label="">
                        <option value='0'>Selecione a cidade</option>
                        {cidades.map(cidade => (<option key={cidade.id} value={cidade.id}>{cidade.nome}</option>))}
                    </select>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="CEP"  />
                        <div className='line'></div>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Senha"  />
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