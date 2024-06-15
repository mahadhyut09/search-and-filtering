import React from 'react'
import {FiHeart} from 'react-icons/fi'
import {AiOutlineShoppingCart,AiOutlineUserAdd} from 'react-icons/ai';
import './Nav.css'
function Nav({handleInputChange}) {
  return (
    <nav>
        <div className='nav-container'>
            {/* <h4 className='title-name'>E-com</h4> */}
            <input type='text' className='search-input' placeholder='Enter the search shoes' onChange={handleInputChange}/>
        </div>
        <div className='profile-container'>
              <a href="#">
              <FiHeart className='nav-icons'/>
              </a>
              <a href="#">
              <AiOutlineShoppingCart className='nav-icons'/>
              </a>
              <a href="#">
              <AiOutlineUserAdd className='nav-icons'/>
              </a>
        </div>
    </nav>
  )
}

export default Nav