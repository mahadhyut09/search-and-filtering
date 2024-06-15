import React from 'react'
import './Sidebar.css'
import Category from './Category/Category';
import Price from './Price/Price';
import Colors from './Colors/Colors';
function Sidebar({handleChange}) {
    console.log(handleChange)
  return (
    <>
    <div className='siderbar-head'>
       <section className='sidebar'>
        <div className='logo-container'>
         <h1>Lg</h1>
        </div>
     <Category handleChange={handleChange}/>
     <Price handleChange={handleChange}/>
     <Colors handleChange={handleChange}/>
    </section>
    </div>
   
    </>
  )
}

export default Sidebar