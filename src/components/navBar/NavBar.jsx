import React from 'react'
import './NavBar.scss'
import { FaRegSun, FaRegMoon, FaTimes, FaBars } from 'react-icons/fa'
import Logo from '../../images/logo.png'
import lightLogo from '../../images/lightLogo.png'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { changeTheme } from '../../redux/actions'
import { useEffect } from 'react'
import gsap from 'gsap'

const NavBar = () => {

  const [clicked, setClicked] = useState(false);
  const [open, setOpen] = useState(false)
  const theme = useSelector((state) => state.theme.theme === null ? null : state.theme.theme)
  const body = document.body;
  const dispatch = useDispatch();

  const switchTheme = (e) => {
    setClicked(!clicked);
    if (theme === "dark") {
      body.classList.replace("dark", "light");
      changeTheme(dispatch, "light")
    } else {
      body.classList.replace("light", "dark");
      changeTheme(dispatch, "dark")
    }
  }

  useEffect(()=> {
    let ctx = gsap.context(() => {
      gsap.from('.menuContent', {x: '80vw', duration: 1})
    })

    return ()=> {ctx.revert()}
  }, [open])

  return (
    <div className='navBar'>
      <div className='navCont'>
        <a href='#home'>
          <div className='leftNav'>
            <img src={theme === "light" ? lightLogo : Logo} alt='logo' />
            <p>ORPHEUS</p>
          </div>
        </a>
        <div className='rightNav'>
          <a className='navLink' href='#works'><p>WORKS</p></a>
          <a className='navLink' href='#contribution'><p>CONTRIBUTION</p></a>
          <a className='navLink' href='#contact'><p>GET IN TOUCH</p></a>
          {clicked ? <FaRegMoon onClick={switchTheme} style={{ fontSize: "29px", cursor: "pointer" }} /> : <FaRegSun onClick={switchTheme} style={{ fontSize: "29px", cursor: "pointer" }} />}
          <div className='navMenu'>
            <FaBars style={{fontSize: "22px", cursor: "pointer"}} onClick={() => setOpen(true)} />

            {open && (
              <div className='menuContent'>
                <FaTimes className='closeButton' style={{fontSize: "22px", cursor: "pointer"}} onClick={() => setOpen(false)} />
                <a onClick={() => setOpen(false)} href='#works'><p>WORKS</p></a>
                <a onClick={() => setOpen(false)} href='#contribution'><p>CONTRIBUTION</p></a>
                <a onClick={() => setOpen(false)} href='#contact'><p>GET IN TOUCH</p></a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar