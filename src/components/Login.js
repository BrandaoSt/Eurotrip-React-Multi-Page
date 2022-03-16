import React from 'react'
import '../css/Login.css'

const Login = () => {
    return (
        <div className='login'>


            <div className='text-center'>
                <h1>Login</h1>
            </div>
            <div className='container'>
                <form>
                    <div className='row justify-content-center'>
                        <div className='col-4'>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" placeholder="Digite seu email" />
                                <div className='line'></div>
                            </div>

                            <div className="form-group">
                                <label>Senha</label>
                                <input type="password" className="form-control" placeholder="Digite sua senha" />
                                <div className='line'></div>
                            </div>
                            <div className='container'>
                                <div className="form-group">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                        <label className="custom-control-label" htmlFor="customCheck1">Lembrar minha senha?</label>
                                    </div>
                                </div>
                            </div>
                            <button className='btn-login login-btn' type="submit">Logar</button>
                            <p className="forgot-password text-right">
                                Esqueceu sua <a href="#">senha?</a>
                            </p>
                            <p className="register text-right">
                                Não possui uma <a href="#">conta?</a>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default Login
