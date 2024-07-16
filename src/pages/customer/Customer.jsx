import React, { memo, useState } from 'react'
import { useGetCustomersQuery, useUpdateCustomersMutation } from '../../lib/api/customers'
import TableWrapper from '../../components/table-wrapper';
import Modal from '../../components/modal/Modal';
import './customer.scss'

const Customer = () => {
    const [showModal, setShowModal] = useState(false)
    const { data } = useGetCustomersQuery()
    const [update, { data: updateData }] = useUpdateCustomersMutation()
    // console.log(data?.innerData[0])

    const updateUser = (e) => {
        e.preventDefault()
        console.log(showModal)
    }

    return (
        <div className='customers'>
            <ul className="customers-title">
                <li className='id'>ID</li>
                <li className='name'>Name</li>
                <li className='address'>Address</li>
                <li className='tel'>TEl</li>
                <li className='price'>Budget</li>
                <li className='more'>Batafsil</li>
                <li className='btns'>Buttuons</li>
            </ul>
            <ul className="customers-ul">
                {
                    data?.innerData?.map((user, inx) => (
                        <TableWrapper key={user?._id} editUser={updateUser} user={user} id={inx} setEdit={setShowModal} />
                    ))
                }
            </ul>
            {
                showModal ? (
                    <Modal close={setShowModal} key={'1'} >
                        <h1>Modal</h1>
                        <form className="update-form">
                            <input value={showModal?.fname} type="text" name="" id="" />
                            <input value={showModal?.lname} type="text" name="" id="" />
                            <button type='submit' className='update-btn'>Update</button>
                        </form>
                    </Modal>
                ) : <></>
            }
        </div>
    )
}

export default memo(Customer)