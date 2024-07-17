import React from 'react'
import { memo } from 'react'
import { Link } from 'react-router-dom'
import { FaPen, FaTrashCan } from 'react-icons/fa6'
import { GiPin } from "react-icons/gi"
import { BsPinAngle } from "react-icons/bs";

const TableWrapper = ({ user, setEdit, id, setPin, pin, editUser }) => {

    return (
        <li className='customers-ul-li' key={user?._id}>
            <p className='id'>
                <button className='pin' onClick={() => user.pin = false}>
                    {
                        user?.pin ? <GiPin fontSize={20} color='red' /> : <BsPinAngle fontSize={20} color='blue' />
                    }
                </button>
                {id + 1}.
            </p>
            <Link to={`/admin/customer/${user?._id}`} className='name'>
                <p>{user?.fname} {user?.lname}</p>
            </Link>
            <p className='address'>{user?.address}</p>
            <a href={`tel:${user?.phone_primary}`} target='_blank'>
                <p className='tel'>{user?.phone_primary}</p>
            </a>
            <div className='price'>
                <span className={user?.budget > 0 ? 'green' : (user?.budget < 0 ? 'red' : (user?.budget === 0 ? 'orange' : ''))}>
                    {user?.budget > 0 ? user?.budget + ' $' : user?.budget === 0 ? user?.budget : user?.budget + ' $'}
                </span>
            </div>
            <div className='more'> <span>Batafsil</span> </div>
            <div className='btns'>
                <span>To`lov</span>
                <button className='edit' onClick={() => { setEdit(user); editUser() }}>
                    <FaPen fontSize={15} />
                </button>
                <button className='delete'>
                    <FaTrashCan fontSize={15} color='red' />
                </button>
            </div>
        </li>
    )
}

export default memo(TableWrapper)