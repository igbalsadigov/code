import React from 'react'
import style from '../Header/Header.css'
const Header = () => {






  return (
    <div className='container'>
        <div className='firstDiv'>
        <h3>Contact Us</h3>
            </div>
     <div className='secondDiv'>
        {/* <h6>full name</h6> */}
        <input type="text" id='inputID' />
        <input type="text" id='inputTwo' />
     </div>
     <div className='thiridDiv'>
        <h3>Email</h3>
        <input type="text" id='secondId'/>
     </div>
     <div className='forthDiv'>
        <h3>Leave us a few words</h3>
        <input type="text" id='thiridId' />
     </div>
     <div className='buttonS'>
     <button>Submit</button>
     </div>
     
    </div>
  )
}

export default Header

