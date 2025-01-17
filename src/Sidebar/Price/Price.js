import React from 'react'
import './Price.css'
import Input from '../../components/Input'

function Price({handleChange}) {
  return (
    <div>
      <h2 className='cat-title'>Price</h2>
      <div>
      <label className='sidebar-label-container'>
      <input onChange={handleChange} type='radio' value=''  name='test'/>
      <span className='checkmark'></span> All
      </label>
      <Input handleChange={handleChange}
      value={50}
      title="$0-50"
      name='test2'
      />
      <Input handleChange={handleChange}
      value={100}
      title="$50-100"
      name='test2'
      />

      <Input handleChange={handleChange}
      value={150}
      title="$100-150"
      name='test2'
      />

      <Input handleChange={handleChange}
      value={200}
      title="$over $150"
      name='test2'
      />
      </div>
    </div>
  )
}

export default Price