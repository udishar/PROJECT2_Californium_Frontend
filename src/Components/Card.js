import React from 'react'
import Zumba from '../Images/Zumbaa.jpg'
import Aerobic from '../Images/aerobic.jpg'
import BodyBuilding from '../Images/bodyy.jpg'
import Flexibility from '../Images/flexibility.jpg'
import Pilates from '../Images/pilates.jpg'
import Yoga from '../Images/Yoogaa.jpg'
import Streching from '../Images/streching.jpg'
import '../Styles/Card.css'
import Carousel from 'react-elastic-carousel'

const breakPoints =[
    {width: 1, itemsToShow:1},
    {width: 550, itemsToShow:2},
    {width: 768, itemsToShow:3},
    {width: 1200, itemsToShow:4}

]

function Card() {
  return (
   
    <div className='Main' id='Training'>
    <section className='section1' id='S1'>
        <h1 className='heading'>Training Program</h1>
        <div className='row'>

            <Carousel breakPoints={breakPoints}>
            <div className='product'>
                <div className='product-thumb'>
                    <a href='#'><img src={Zumba} alt='Zumba'/></a>
                </div>
                <div className='product-body'>
                    <div className='title'>
                        <h6>Zumba</h6>
                    </div>
                </div>
            </div>
            <div className='product'>
                <div className='product-thumb'>
                    <a href='#'><img src={Aerobic} alt='Zumba'/></a>
                </div>
                <div className='product-body'>
                    <div className='title'>
                        <h6>Aerobics</h6>
                    </div>
                </div>
            </div>
            <div className='product'>
                <div className='product-thumb'>
                    <a href='#'><img src={BodyBuilding} alt='Zumba'/></a>
                </div>
                <div className='product-body'>
                    <div className='title'>
                        <h6>Body Building</h6>
                    </div>
                </div>
            </div>
            <div className='product'>
                <div className='product-thumb'>
                    <a href='#'><img src={Flexibility} alt='Zumba'/></a>
                </div>
                <div className='product-body'>
                    <div className='title'>
                        <h6>Flexibility</h6>
                    </div>
                </div>
            </div>
            <div className='product'>
                <div className='product-thumb'>
                    <a href='#'><img src={Pilates} alt='Zumba'/></a>
                </div>
                <div className='product-body'>
                    <div className='title'>
                        <h6>Pilates</h6>
                    </div>
                </div>
            </div>
            <div className='product'>
                <div className='product-thumb'>
                    <a href='#'><img src={Streching} alt='Zumba'/></a>
                </div>
                <div className='product-body'>
                    <div className='title'>
                        <h6>Streching</h6>
                    </div>
                </div>
            </div>
            <div className='product'>
                <div className='product-thumb'>
                    <a href='#'><img src={Yoga} alt='Zumba'/></a>
                </div>
                <div className='product-body'>
                    <div className='title'>
                        <h6>Yoga</h6>
                    </div>
                </div>
            </div>
            </Carousel>
        </div>
    </section>
    </div>
    
  )
}

export default Card;
