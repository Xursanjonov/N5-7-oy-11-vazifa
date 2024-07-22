import React from 'react'
import './empty.scss'
import { useNavigate } from 'react-router-dom'

const Empty = () => {
    const navigate = useNavigate()

    return (
        <section className='empty'>
            <div className="empty__btns">
                <button onClick={() => navigate('/admin/customer')} className='home'>Go Home</button>
                <button onClick={() => navigate(-1)} className='back'>Go back</button>
            </div>
            <figure className='empty__img'>
                <img className='empty__image' src="https://i0.wp.com/www.osmpic.com/wp-content/uploads/2019/06/PicsArt_06-20-05.22.08-1024x1001.jpg" alt="" />
            </figure>
        </section>
    )
}

export default Empty