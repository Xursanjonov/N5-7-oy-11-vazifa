import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FaPen, FaUser } from 'react-icons/fa';
import { editProfile } from '../../lib/slice/profileSlice';
import { useGetProfileQuery, useUpdateProfileMutation } from '../../lib/api/userApi';
import './profile.scss'

let user = {}

const Profile = () => {
    const { data: admin } = useGetProfileQuery()
    const [updateProfiles, { data }] = useUpdateProfileMutation()
    const users = admin?.innerData?.user
    const [update, setUpdate] = useState(user ?? users)
    const [dis, setDis] = useState(true)
    // const value = useSelector(state => state.profile.value)
    const dispatch = useDispatch()

    const handaleSubmit = (e) => {
        e.preventDefault()
        const { fname, lname, phone_primary, username } = update
        updateProfiles({ fname, lname, phone_primary, username })
        setDis(false)
    }
    useEffect(() => {
        user = users
        dispatch(editProfile(user))
    }, [admin])

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
                    className='profile-input' value={update?.fname} type="text" id="fname_1" />
            </label>
            <label htmlFor="lname_1" className='profile-label'>
                <span>Last Name</span>
                <input disabled={dis} onChange={(e) => setUpdate(p => ({ ...p, lname: e.target.value }))}
                    className='profile-input' value={update?.lname} type="text" id="lname_1" />
            </label>
            <label htmlFor="phone_primary_1" className='profile-label'>
                <span>Phone Number</span>
                <input disabled={dis} onChange={(e) => setUpdate(p => ({ ...p, phone_primary: e.target.value }))}
                    className='profile-input' value={update?.phone_primary} type="text" id="phone_primary_1" />
            </label>
            <label htmlFor="username_1" className='profile-label'>
                <span>UserName</span>
                <input disabled={dis} onChange={(e) => setUpdate(p => ({ ...p, username: e.target.value }))}
                    className='profile-input' value={update?.username} type="text" id="username_1" />
            </label>
            <p className={`${dis ? "none" : 'profile-btn'}`}>
                <button type='submit' className='profile-edit'>Update</button>
            </p>
        </form>
    )
}

export default memo(Profile)