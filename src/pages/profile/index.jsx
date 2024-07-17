import React, { memo, useState } from 'react'
import { useSelector } from 'react-redux'
import { FaPen, FaUser } from 'react-icons/fa';
import './profile.scss'

const Profile = () => {
    const profile = useSelector(state => state.profile.value)
    const [update, setUpdate] = useState({ ...profile })
    const [dis, setDis] = useState(true)

    const setUpdateUser = ({ fname, lname, phone_primary, username }) => {
        fetch('https://trade.namtech.uz/update/profile', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("admin-token")}`
            },
            body: { fname, lname, phone_primary, username, password: "123456788" }
        })
            .then(response => response.json())
            .then(data => console.log(data?.innerData.user))
            .catch(er => console.error('Error:', er));
    }

    const handaleSubmit = (e) => {
        e.preventDefault()
        const { fname, lname, phone_primary, username } = update
        setUpdateUser({ fname, lname, phone_primary, username })
    }

    return (
        <form onSubmit={handaleSubmit} className='profiles'>
            <figure className='profiles-img'>
                <FaUser fontSize={50} />
                <button onClick={() => setDis(p => !p)} type='button' className='profiles-img-edit'>
                    <FaPen fontSize={24} />
                </button>
            </figure>
            <label htmlFor="fname_1" className='profile-label'>
                <span>Firs Name</span>
                <input disabled={dis} onChange={(e) => setUpdate(p => ({ ...p, fname: e.target.value }))}
                    className='profile-input' value={update.fname} type="text" id="fname_1" />
            </label>
            <label htmlFor="lname_1" className='profile-label'>
                <span>Last Name</span>
                <input disabled={dis} onChange={(e) => setUpdate(p => ({ ...p, lname: e.target.value }))}
                    className='profile-input' value={update.lname} type="text" id="lname_1" />
            </label>
            <label htmlFor="phone_primary_1" className='profile-label'>
                <span>Phone Number</span>
                <input disabled={dis} onChange={(e) => setUpdate(p => ({ ...p, phone_primary: e.target.value }))}
                    className='profile-input' value={update.phone_primary} type="text" id="phone_primary_1" />
            </label>
            <label htmlFor="username_1" className='profile-label'>
                <span>UserName</span>
                <input disabled={dis} onChange={(e) => setUpdate(p => ({ ...p, username: e.target.value }))}
                    className='profile-input' value={update.username} type="text" id="username_1" />
            </label>
            {/* <label htmlFor="password_1" className='profile-label'>
                <span>Password</span>
                <input disabled={dis} onChange={(e) => setUpdate(p => ({ ...p, password: e.target.value }))}
                    className='profile-input' value={update.password} type="password" id="password_1" />
            </label> */}
            <p className={`${dis ? "none" : 'profile-btn'}`}>
                <button type='submit' className='profile-edit'>Update</button>
            </p>
        </form>
    )
}

export default memo(Profile)