import React, { memo, useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from './sidebar/Sidebar'
import Header from './header'
import './layout.scss'

const Layout = () => {
    const navigate = useNavigate()
    const [bars, setBars] = useState(localStorage.getItem("bars") ?? true)

    useEffect(() => {
        localStorage.setItem('bars', bars)
    }, [bars])

    if (!localStorage.getItem("admin-token")) {
        return navigate('/')
    }

    return (
        <div className={`layout__container ${bars ? 'barsL-off' : 'barsL-on'}`}>
            <Sidebar bars={bars} />
            <div>
                <Header setBars={setBars} bars={bars} />
                <main className='layout__container-main'>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default memo
    (Layout)