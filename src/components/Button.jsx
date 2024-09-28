import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='px-5 py-1 rounded-lg bg-purple-300'>{name}</button>
    </div>
  )
}

export default Button