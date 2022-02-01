import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import avatar4 from '../Avatares/avatar4.png'
import avatar1 from '../Avatares/avatar1.png'
import avatar2 from '../Avatares/avatar2.png'
import avatar5 from '../Avatares/avatar5.png'

const CarouselAvaliacoes = () => {
    return (
        <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={3000}
        >
            <>
                <img src={avatar4} alt='super homem' />
                <div className='meucarousel'>
                    <h3>Clark Kent</h3>
                    <p>A Eurotrip desenvolve planos de viagens viáveis, cumpre todos os prazos e os valores da empresa são excelentes.</p>
                </div>
            </>
            <>
                <img src={avatar1} alt='Merida' />
                <div className='meucarousel'>
                    <h3>Merida</h3>
                    <p> A Eurotrip desenvolve planos de viagens viáveis, cumpre todos os prazos e os valores da empresa são excelentes.</p>
                </div>
            </>
            <>
                <img src={avatar2} alt='sandra' />
                <div className='meucarousel'>
                    <h3>Sandra Bullock</h3>
                    <p>A Eurotrip desenvolve planos de viagens viáveis, cumpre todos os prazos e os valores da empresa são excelentes.</p>
                </div>
            </>
            <>
                <img src={avatar5} alt='megan' />
                <div className='meucarousel'>
                    <h3>Megan Fox</h3>
                    <p>A Eurotrip desenvolve planos de viagens viáveis, cumpre todos os prazos e os valores da empresa são excelentes.</p>
                </div>
            </>
        </Carousel>
    )
}


export default CarouselAvaliacoes
