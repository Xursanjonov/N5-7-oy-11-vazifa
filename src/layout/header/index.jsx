import React, { memo } from 'react'
import { FaBars, FaUser, FaBarsStaggered } from "react-icons/fa6";
import { FaSearch } from 'react-icons/fa';
import './header.scss'

const Header = ({ bars, setBars }) => {

    return (
        <header className='header'>
            <div className="header__left">
                <button onClick={() => setBars(p => !p)} className='bars'>
                    {
                        bars ?
                            <FaBars fontSize={24} color='black' />
                            :
                            <FaBarsStaggered fontSize={24} color='black' />
                    }
                </button>
                <label className='search'>
                    <span className='search-icon'> <FaSearch /> </span>
                    <input className='search-input' type="search" placeholder="Search..." />
                </label>
            </div>
            <div className="header__right">
                <select className="language">
                    <option value="uz">UZ</option>
                    <option value="en">EN</option>
                    <option value="ru">RU</option>
                </select>
                <div className="profile">
                    <FaUser fontSize={24} className='profile-icons' />
                </div>
            </div>
        </header>
    )
}

export default memo(Header)