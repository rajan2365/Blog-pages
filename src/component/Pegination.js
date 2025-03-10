import React, { useContext } from 'react'
import { Appcontext } from '../context/AppContext';
 const Pegination = () => {
   const{page,totalpage,handlepagechange}=useContext(Appcontext);
  return (
    <div className='class="fixed bottom-0 inset-x-0 bg-white py-2 border-t-2 border-t-gray-300 w-full fixed'>
      <div className='flex items-center gap-x-3 w-11/12 max-w-2xl mx-auto'>
        {page>1&&
          (<button className='border-2 border-gray-300 py-1 px-4 rounded-md' onClick={()=>{
    handlepagechange(page-1)
          }}>Previous</button>)
        }
        {page<totalpage&&
          (<button className='border-2 border-gray-300 py-1 px-4 rounded-md'  onClick={()=>{
            handlepagechange(page+1)
          }}>Next</button>)
        }
        <p className='ml-[500px] fixed'>
          Page {page} of {totalpage}
        </p>
      </div>
    </div>
  )
}

export default Pegination;
