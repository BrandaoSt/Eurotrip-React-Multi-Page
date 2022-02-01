import React from 'react'

const Rotas = () => {
    return (
        <div className='rotas'>
            <div className='d-flex justify-content-center my-5'>
                <h1>Rotas</h1>
            </div>
            <div className='container rotas-wrapper'>
                <div className='timeline-block timeline-block-right'>
                    <div className='marker'></div>
                    <div className='timeline-content'>
                        <h3 className='titlerota'>De Roma a Florença</h3>
                        <p>As duas cidades têm grande importância histórica para a Itália, por isso, há muitos pontos turísticos para conhecer assim que chegar aos destinos. Em Roma, visite o Coliseu; em Florença, a Ponte Vecchio, que atravessa o Rio Arno.</p>
                    </div>
                </div>
                {/* - */}
                <div className='timeline-block timeline-block-left'>
                    <div className='marker'></div>
                    <div className='timeline-content'>
                        <h3 className='titlerota'>De Amsterdã a Paris</h3>
                        <p>Em Amsterdã, conheça ruas charmosas, canais para navegar a barco e inovação em diversos assuntos. Já em Paris, há uma enorme infraestrutura iluminada que faz jus ao nome de Cidade Luz.</p>
                    </div>
                </div>
                {/* - */}
                <div className='timeline-block timeline-block-right'>
                    <div className='marker'></div>
                    <div className='timeline-content'>
                        <h3 className='titlerota'>De Paris a Nice </h3>
                        <p>Depois de visitar os pontos turísticos de Paris, você vai para Nice, a sofisticada cidade litorânea que atrai os apaixonados por praia, calor e compras.</p>
                    </div>
                </div>
                {/* - */}
                <div className='timeline-block timeline-block-left'>
                    <div className='marker'></div>
                    <div className='timeline-content'>
                        <h3 className='titlerota'>De Levanto a La Spezia</h3>
                        <p>A viagem começa em Levanto e vai até La Spezia, dois destinos litorâneos da Itália muito famosos por suas características únicas: prédios coloridos que se contrastam com o mar cristalino, montanhas rochosas que cercam a baía e passeios de bicicleta que substituem o uso do carro.</p>
                    </div>
                </div>
                {/* - */}
                <div className='timeline-block timeline-block-right'>
                    <div className='marker'></div>
                    <div className='timeline-content'>
                        <h3 className='titlerota'>De Berlim a Praga</h3>
                        <p>Praga é famosa por seu extenso patrimônio arquitetônico, considerado um dos mais belos e antigos centros urbanos da Europa. Já Berlim, a capital da Alemanha, é uma metrópole rica em história e com muitas opções de entretenimento.</p>
                    </div>
                </div>
                {/* - */}
                <div className='timeline-block timeline-block-left'>
                    <div className='marker'></div>
                    <div className='timeline-content'>
                        <h3 className='titlerota'>De Madri a Sevilha</h3>
                        <p>É possível encontrar itinerários que partem da estação Puerto de Atocha e chegam à estação Sevilla Santa Justa, lugares que facilitam o acesso aos pontos turísticos da Espanha. Dessa forma, é possível passar pelas principais belezas do interior do país.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Rotas
