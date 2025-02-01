import React from 'react'
import Timer from './Timer'
import WordCounter from './WordCounter'
import ImageLoader from './ImageLoader'

function App() {

  return (
    <>
      <div className='container py-3'>
        <div className='row mb-3'>
          <h1 className='text-center'>Image describing training App</h1>
          <div className='text-center'>(DuoLingo English Test: <span className='text-primary text-decoration-underline' style={{cursor: "pointer"}}>manual</span>)</div>

        </div>
        <div className='row'>
          <div className='col-md-6 col-12 order-2 order-md-1'>
            <div className='row'>
              <div className='col-12 order-2 order-md-1'>
                <Timer />
              </div>
              <div className='col-12 order-1 order-md-2'>
                <WordCounter />
              </div>
            </div>
          </div>
          <div className='col-md-6 col-12 order-1 order-md-2'>
            <ImageLoader />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
