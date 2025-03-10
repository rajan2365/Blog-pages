import React from 'react'
import Header from './component/Header'
import Blogs from './component/Blogs'
import Pegination from './component/Pegination'

export const Home = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-x-1 ">
        <Header/>
        <div>
            <Blogs/>
            <Pegination/>
        </div>
    </div>
  )
}
