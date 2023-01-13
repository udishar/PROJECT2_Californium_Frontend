import React from 'react'
import Zumba from '../Images/zumbaT.jpg'
import Aerobic from '../Images/aeroT.jpg'
import BodyBuilding from '../Images/bodyt.jpg'
import Flexibility from '../Images/flexT.jpg'
import Pilates from '../Images/pilatesT.jpg'
import Yoga from '../Images/YogaT6.jpg'
import Streching from '../Images/StrechT.jpg'
import '../Styles/Card.css'
import { useNavigate } from 'react-router-dom'
import Carousel from 'react-elastic-carousel'
const breakPoints =[
    {width: 1, itemsToShow:1},
    {width: 550, itemsToShow:2},
    {width: 768, itemsToShow:3},
    {width: 1200, itemsToShow:4}

]

const TrainerCard = () => {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/showTeam`; 
      navigate(path);
    }
  return (
    <div className='Main' id='Meet'>
    <section className='section1'>
       
        <h1 className='heading'> Meet Our Trainers</h1>
        <p className='para'>We are a team of experienced people, nutrition, spots and fitness pationate experts with talent and knowladge unsurpassed in the industry. Get to know us.</p>
       
         <div className='row'>


            <Carousel breakPoints={breakPoints}>
            <div className='product'>
                <div className='product-thumb'>
                    <a href='#'><img src={Zumba} alt='Zumba'/></a>
                </div>
                <div className='product-body'>
                    <div className='title'>
                        <h6>Zumba Trainer</h6>
                        <p>Miss Olivia </p>
                    </div>
                </div>
            </div>
            <div className='product'>
                <div className='product-thumb'>
                    <a href='#'><img src={Aerobic} alt='Zumba'/></a>
                </div>
                <div className='product-body'>
                    <div className='title'>
                        <h6>Aerobics Trainer</h6>
                        <p>Mrs Emma James </p>
                    </div>
                </div>
            </div>
            <div className='product'>
                <div className='product-thumb'>
                    <a href='#'><img src={BodyBuilding} alt='Zumba'/></a>
                </div>
                <div className='product-body'>
                    <div className='title'>
                        <h6>Body Building Trainer</h6>
                        <p>Mr Noah</p>
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
                        <p>Miss Charlotte</p>
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
                        <p>Miss Amelia</p>
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
                        <p>Miss Sianna-Marie</p>
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
                        <p>Mrs Windy Hart</p>
                    </div>
                </div>
            </div>
            </Carousel>
        </div>
        
        
    </section>
    <button className='teambtn' onClick={routeChange}>See the whole team</button>
    </div>
    
  )
}

export default TrainerCard
