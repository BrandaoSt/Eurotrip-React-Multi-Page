import React from 'react'
import minhafoto from '../imagens/minhafoto2.jpg'
const Sobre = () => {
    return(
        <div className='container py-5'>
            <div className='row'>
                <div className='col-lg-6 col-xm-12'>
                    <div className='divfoto mb-5'>
                    <img className='minhafoto' src={minhafoto} alt='foto pessoal'></img>
                    </div>
                </div>
                <div className='col-lg-6 col-xm-12'>
                    <h1 className='title-sobre'>Tudo o que você precisa saber está aqui!</h1>
                    <p>
                    Quando falam que viajar é a única coisa que você compra que te deixa mais rico, é a mais pura verdade. Viajar tem a ver com viver experiências: quanto mais completa de passeios, culturas, aventuras, descobertas e imersões sua viagem for, mais rico fica seu repertório e mais valem os dias fora de casa. 
                    Quando me perguntam por que eu viajo, a resposta é para viver, registrar e compartilhar experiências que preenchem a minha alma, sentir a energia nova batendo no meu rosto, essa sensação de entusiasmo que toma conta ao chegar num lugar diferente, a noção de pertencimento que cresce a cada lugar que eu visito. Que me faz ter a certeza de que o mundo ser um lugar tão incrível assim tem uma finalidade clara: ser vivido.
                    </p>
                    <p className='assinatura'>Patricia Brandão - Fundadora da Eurotrip</p>
                </div>
            </div>
        </div>
    )
}

export default Sobre