import React, { memo } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { RiAdminFill } from "react-icons/ri";
import { FaUser, FaUsers } from "react-icons/fa";
import { MdDashboard, MdDashboardCustomize, MdOutlinePriceChange } from "react-icons/md";
import './sidebar.scss'

const Sidebar = ({ bars }) => {
    const user = JSON.parse(localStorage.getItem("admin"))
    const barsIcon = localStorage.getItem("bars")

    console.log(barsIcon)

    return (
        <div className={`sidebar ${!bars ? 'bars-on' : 'bars-off'}`}>
            <Link to={`/admin/customer`} className='sidebar-logo'>
                <RiAdminFill fontSize={24} className='sidebar-logo-icon' color='#0009' />
                {
                    bars ? (user?.fname + ' ' + user?.lname) : <></>
                }
            </Link>
            <ul className='sidebar-ul'>
                <NavLink to={`/admin/customer`} className='li'>
                    <span className='sidebar-ul-li-line'></span>
                    <p className='link'> <MdDashboard className='sidebar-icon' fontSize={24} /> <span className={`${bars ? "block" : 'none'}`}>Customer</span> </p>
                </NavLink>
                <NavLink to={`/admin/create-customer`} className='li'>
                    <span className='sidebar-ul-li-line'></span>
                    <p className='link'> <MdDashboardCustomize className='sidebar-icon' fontSize={24} /> <span className={`${bars ? "block" : 'none'}`}>Create Customer</span> </p>
                </NavLink>
                <NavLink to={`/admin/order`} className='li'>
                    <span className='sidebar-ul-li-line'></span>
                    <p className='link'> <MdOutlinePriceChange className='sidebar-icon' fontSize={24} /> <span className={`${bars ? "block" : 'none'}`}>Order</span> </p>
                </NavLink>
                <NavLink to={`/admin/seller`} className='li'>
                    <span className='sidebar-ul-li-line'></span>
                    <p className='link'> <FaUsers className='sidebar-icon' fontSize={24} /> <span className={`${bars ? "block" : 'none'}`}>Seller</span> </p>
                </NavLink>
                <NavLink to={`/admin/create-seller`} className='li'>
                    <span className='sidebar-ul-li-line'></span>
                    <p className='link'> <FaUser className='sidebar-icon' fontSize={20} /> <span className={`${bars ? "block" : 'none'}`}>Create Seller</span> </p>
                </NavLink>
            </ul>
        </div>
    )
}

export default memo(Sidebar)