import React, { useEffect, useState } from 'react'
import './Nav.css';

function Nav() {
    const [show,setShow] = useState(false)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>650){
                setShow(true)
            }
            else{
                setShow(false)
            }
        })
    })
    console.log(show);
  return (
    <div className={`nav ${show && 'nav-black'}`}>
        <img width={'150px'} src="https://www.pinclipart.com/picdir/big/2-23236_transparent-netflix-logo-2018-clipart.png" alt="logo" />
    </div>
  )
}

export default Nav