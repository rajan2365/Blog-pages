import React from 'react'

export const Spinner = () => {
  return (
    <div className='flex flex-col items-center justify-center h-[70vh]'>
      <div className='loader'></div>
      <p>Loading...</p>
    </div> 
  )
}
