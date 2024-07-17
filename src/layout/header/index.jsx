import React, { memo, useState } from 'react'
import { FaBars, FaUser, FaBarsStaggered } from "react-icons/fa6";
import { FaSearch } from 'react-icons/fa';
import './header.scss'
import { useNavigate } from 'react-router-dom';

const Header = ({ bars, setBars }) => {
    const [bool, setBool] = useState(false)
    const navigate = useNavigate()

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
                <button onClick={() => setBool(p => !p)} className="profile">
                    <FaUser fontSize={24} className='profile-icons' />
                    {
                        bool ? (
                            <div className="profile-click">
                                <button onClick={() => navigate('/admin/profile')}>Profile</button>
                                <button>Setting</button>
                                <button className='log-out'>Log out</button>
                            </div>
                        ) : <></>
                    }
                </button>
            </div>
        </header>
    )
}

export default memo(Header)