import React from 'react'
import './Colors.css'
import Input from '../../components/Input'
function Colors({handleChange}) {
  return (
    <div>
    <h2 className='cat-title'>Colors</h2>
    <div>
    <label className='sidebar-label-container'>
      <input onChange={handleChange} type='radio' value=''  name='test'/>
      <span className='checkmark'></span> All
      </label>
    </div>
  </div>
  )
}

export default Colors