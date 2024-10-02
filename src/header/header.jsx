import React from 'react'
import '../App.css'
import finswet from '../images/finswet.png'
export default function Header() {
  return (
    <header>
        <div className='navbar'>
            <div><h2>Styleguide</h2></div>
            <div><img src={finswet} alt="" /></div>
        </div>
        <div className='hr'>
            <hr />
        </div>
    </header>
  )
}
