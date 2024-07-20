import React from 'react'
import { memo } from 'react'
import { Link } from 'react-router-dom'
import { FaPen, FaTrashCan } from 'react-icons/fa6'
import { GiPin } from "react-icons/gi"
import { BsPinAngle } from "react-icons/bs";
import { useUpdateCustomersMutation } from '../../lib/api/customers'

const TableWrapper = ({ user, setEdit, id, editUser }) => {
    const [updates, { isLoading }] = useUpdateCustomersMutation()
    const updatePin = () => {
        updates({ id: user?._id, body: { ...user, pin: !user?.pin } })
    }

    return (
        <li className='customers-ul-li' key={user?._id}>
            <p className='id'>
                <button className='pin' onDoubleClick={updatePin}>
                    {
                        user?.pin ? <GiPin fontSize={20} color='red' /> : <BsPinAngle fontSize={20} color='blue' />
                    }
                </button>
                <span title={`USER ID: ${user?._id}`}>
                    {id + 1}.
                </span>
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
                    {user?.budget > 0 ? (user?.budget).brm() + ' $' : user?.budget === 0 ? (user?.budget).brm() : (user?.budget).brm() + ' $'}
                </span>
            </div>
            <div className='more'> <span>Batafsil</span> </div>
            <div className='btns'>
                <span>To`lov</span>
                <button className='edit' onClick={() => { setEdit(user); editUser() }}>
                    <FaPen fontSize={15} />
                </button>
                {
                    user?.role === 'awner' ? (
                        <button className='delete'>
                            <FaTrashCan fontSize={15} color='red' />
                        </button>
                    ) : <></>
                }
            </div>
        </li>
    )
}

export default memo(TableWrapper)