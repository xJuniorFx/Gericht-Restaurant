import React, { useState } from 'react';
import style from './Navbar.module.scss';
import classnames from 'classnames';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import images from '../../constants/images'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    return(
        <nav className={style.app__navbar}>
            <div className={style.app__navbar_logo}>
                <img src={images.gericht} alt='App Logo' />
            </div>
            <ul className={style.app__navbar_links}>
                <li className={style.p__opensans}><a href="#home">Home</a></li>
                <li className={style.p__opensans}><a href="#about">About</a></li>
                <li className={style.p__opensans}><a href="#menu">Menu</a></li>
                <li className={style.p__opensans}><a href="#awards">Awards</a></li>
                <li className={style.p__opensans}><a href="#contact">Contact</a></li>
            </ul>
            <div className={style.app__navbar_login}>
                <a href='#login' className={style.p__opensans}>Log In / Register</a>
                <div/>
                <a href='/' className={style.p__opensans}>Book Table</a>
            </div>
            <div className={style.app__navbar_smallscreen}>
                <GiHamburgerMenu color='#fff' fontSize={27} onClick={()=> setToggleMenu(true)}/>
                {toggleMenu &&(
                    <div className={classnames([style.app__navbar_smallscreen_overlay],[style.slide_bottom])}>
                        <MdOutlineRestaurantMenu fontSize={27} className={style.overlay__close} onClick={()=> setToggleMenu(false)}/>
                        <ul className={style.app__navbar_smallscreen_links}>
                            <li><a onClick={() => setToggleMenu(false)} href="#home">Home</a></li>
                            <li><a onClick={() => setToggleMenu(false)} href="#about">About</a></li>
                            <li><a onClick={() => setToggleMenu(false)} href="#menu">Menu</a></li>
                            <li><a onClick={() => setToggleMenu(false)} href="#awards">Awards</a></li>
                            <li><a onClick={() => setToggleMenu(false)} href="#contact">Contact</a></li>
                        </ul>
                    </div> 
                )}        
            </div>
        </nav>
    )
}

export default Navbar;