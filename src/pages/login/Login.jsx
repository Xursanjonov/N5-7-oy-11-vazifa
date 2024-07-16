import React, { memo, useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setAdmin, setToken } from '../../lib/slice/authSlice'
import { useNavigate } from 'react-router-dom'
import './login.scss'

const Login = () => {
    const [admins, setAdmins] = useState({ username: 'khursanjonov', password: '123456788' })
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://trade.namtech.uz/admin/sign-in', admins)
            .then(res => (
                dispatch(setToken(res.data.innerData.token)),
                dispatch(setAdmin(res.data.innerData.user)),
                navigate("/admin/customer")
            ))
    }

    return (
        <div className='login'>
            <form onSubmit={handleSubmit} className="login-form">
                <h1 className='login-title'>Login</h1>
                <label htmlFor=""><span>UserName</span>
                    <input value={admins.username} onChange={e => setAdmins(p => ({ ...p, username: e.target.value }))}
                        type="text" placeholder="UserName" />
                </label>
                <label htmlFor=""><span>Password</span>
                    <input value={admins.password} onChange={e => setAdmins(p => ({ ...p, password: e.target.value }))}
                        type="password" placeholder="Password" />
                </label>
                <button type='submit' className='login-form-btn'>Submit</button>
            </form>
        </div>
    )
}

export default memo(Login)