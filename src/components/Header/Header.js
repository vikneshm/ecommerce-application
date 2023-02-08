import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import './header.css'
import {VscHome} from 'react-icons/Vsc'
import {MdOutlineFavoriteBorder,MdOutlineListAlt} from 'react-icons/Md'
import {RiAccountCircleLine} from 'react-icons/Ri'
import {BsCart3} from 'react-icons/Bs'

const Header = () => {
    return(
        <>
            <div className='header-container-1'>
            <h3>Website</h3>
            <form className='input-form'>
                <input type='text' placeholder='Search not functioning right now' className='input-search' ></input>
                <button className='search-button' type='submit'>Search</button>
            </form>
            <div className='inner-container'>
                <div>
                    <Link className='icon-link' to='/'>
                        <VscHome className='header-icon'/>
                    <p>Home</p>
                    </Link>
                </div>
                <div>
                    <Link className='icon-link' to='/content'>
                    <MdOutlineListAlt className='header-icon'/>
                    <p>Products</p>
                    </Link>
                </div>
                <div>
                    <Link className='icon-link'>
                    <MdOutlineFavoriteBorder className='header-icon'/>
                    <p>Favourite</p>
                    </Link>
                </div>
                <div>
                    <Link className='icon-link' to='/signIn'>
                    <RiAccountCircleLine className='header-icon'/>
                    <p>Log in</p>
                    </Link>
                </div>
                <div>
                    <Link className='icon-link'>
                    <BsCart3 className='header-icon'/>
                    <div><span className='cart-item'>0</span><br/><p>$500</p></div>
                    </Link>
                </div>
            </div>
        </div>
        {/* <div className='header-container-2'>
            <div className='header-navbar'>
                <NavLink className='nav-link' to='/'>Home</NavLink>
                <NavLink className='nav-link' to='/'>OurStore</NavLink>
                <NavLink className='nav-link' to='/'>Blog</NavLink>
                <NavLink className='nav-link' to='/contact'>Contact</NavLink>
            </div>
        </div> */}
        </>
    )
}

export default Header;