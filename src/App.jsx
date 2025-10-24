import React from 'react'
import '../dist/dolphin-css.css'
function App() {
  return (
    <div className='flex flex-col'>
       <h1 className='filled info p-4 w-full'>hello react</h1>
        <div className='input-wrapper p-6'>
          <label className='input-label' htmlFor="name">Enter your name</label>
          <input className='outlined primary p-2' type="text" placeholder='name' />
            <button className='circle primary filled lg'>hello</button>
        </div>
    </div>
  )
}

export default App