import React from 'react'
import { useRef } from 'react'
import Api from '../service/Api'
import '../css/Forgot.css'

const Forgot = () => {

    const email = useRef()
    
    function Forgot(event) {
        event.preventDefault()
        Api.post('/auth/forgot', {
            email: email.current.value
        }).then((res) => console.log(res))
            .catch((err) => console.log(err))
    }

    return (
        <div className='forgot'>
            <div className='text-center'>
                <h1>Recuperação de senha</h1>
            </div>
            <form onSubmit={Forgot}>
                <div className='row justify-content-center'>
                    <div className='col-4'>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Digite seu email" ref={email} />
                            <div className='line'></div>
                        </div>
                        <button className='btn-forgot forgot-btn' type="submit">Enviar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Forgot
