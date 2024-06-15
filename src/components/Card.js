import React from 'react'
import { AiFillStar } from 'react-icons/ai';
import {BsFillBagHeartFill} from 'react-icons/bs'
function Card({img,title,star,reviews,newPrice}) {
  return (
    <section className='card'>
    <img src={img} alt='shoe' className='card-img'/>
    <div className='card-details'>
        <h3 className='card-title'>{title}</h3>
        <section className='card-reviews'>
            {star}{star}{star}
            <span className='total-reviews'>{reviews}</span>
        </section>
        <section className='card-price'>
            <div className='price'>Rs<del> 3000</del>{newPrice}</div>
            <div className='bag'><BsFillBagHeartFill/></div>
        </section>
    </div>
</section>

  )
}

export default Card