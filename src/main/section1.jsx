import React from 'react'
import {Link} from 'react-router-dom'
import downlaod from '../images/download.png'
import file from '../images/file.png'
export default function Section1() {
  return (
    <div className='section1'>
        <div className="container">
            <div className='typo'>
                <h2>Typography</h2>
            </div>
            <div className='block'>
                <div className='download'>
                    <div><img src={downlaod} alt="" /></div>
                    <div><h2>Download the Font family 👉</h2></div>
                </div>
                <div className='roboto'>
                    <div className='img'><img src={file} alt="" />
                        <p className='p'>Aa</p>
                    </div>
                    <div><Link className='link' to="https://fonts.google.com/specimen/Roboto">Roboto Font Family</Link></div>
                </div>
            </div>
        </div>
    </div>
  )
}
