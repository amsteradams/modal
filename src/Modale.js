import React from 'react'
import { useState } from 'react'
import './Modale.css'
export default function Modale() {
    const [modale, setModale] = useState(false)
    const toggleModale = ()=>{
        setModale(!modale)
    }
    return (
    <>
        <button onClick={toggleModale} className='btn-modal'>Open</button>
        {modale &&
            <div className='overlay'>
            <div className='modale'>
                <div className='Modale-content'>
                    <h2>Hello modale</h2>
                    <p>
                        Deserunt anim ad velit dolore quis tempor. Officia dolor officia sint ex excepteur tempor qui fugiat cupidatat sit. Nisi quis in commodo do eiusmod incididunt ullamco aliquip sunt excepteur sit irure. Minim ad excepteur excepteur et qui pariatur aliquip proident qui tempor.
                    </p>
                    <button onClick={toggleModale} className='close-modale'>X</button>
                </div>
            </div>
        </div>
        }
    </>
  )
}
