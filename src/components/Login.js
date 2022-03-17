import React from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import '../css/Login.css'
import Api from '../service/Api'

const Login = () => {

    const email = useRef()
    const senha = useRef()

    function logar(event) {
        event.preventDefault()
        Api.post('/login', {
            email: email.current.value,
            senha: senha.current.value
        }).then((res) => localStorage.setItem("token", res.headers.authorization))
            .catch((err) => alert("Usuário e/ou senha inválidos!"))
    }

    function logout() {
        localStorage.removeItem("token")
    }

    return (

        <div className='login'>
            <div className='text-center'>
                <h1>Login</h1>
            </div>
            <div className='container'>
                {localStorage.getItem("token") === null ?
                    <>
                        <form onSubmit={logar}>
                            <div className='row justify-content-center'>
                                <div className='col-4'>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" className="form-control" placeholder="Email" ref={email} />
                                        <div className='line'></div>
                                    </div>

                                    <div className="form-group">
                                        <label>Senha</label>
                                        <input type="password" className="form-control" placeholder="Senha" ref={senha} />
                                        <div className='line'></div>
                                    </div>
                                    <div className='align text-left mb-4 text-secondary'>
                                        <div className="form-group">
                                            <div className="custom-checkbox">
                                                <input type="checkbox" className='custom-control' />
                                                <label className="custom-control-label">Lembrar minha senha?</label>
                                            </div>
                                        </div>
                                    </div>
                                    <button className='btn-login login-btn' type="submit">Logar</button>
                                    <p className="forgot-password text-right">
                                        Esqueceu sua <Link className="a" to="/forgot">senha?</Link>
                                    </p>
                                    <p className="register text-right">
                                        Não possui uma <Link className="a" to="/register">conta?</Link>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </>
                    : <> <h1>Bem vindo</h1>
                        <button onClick={logout} className="btn btn-primary">Logout</button>
                    </>}
            </div>
        </div >
    )
}

export default Login
