import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const list = ["All" , "Music" , "Podcasts" , "Chess" , "News" , "Thoughts" , "Debates" , "Albums", "Watched","Watched","Watched","Watched","Watched" ]
  return (
    <div className='flex ml-8 gap-10 mt-5 overflow-x-hidden flex-nowrap'> 
      {list.map(item => (<Button name={item}></Button>))}
    </div>
  )
}

export default ButtonList