import React, { memo, useState } from 'react'
import { useGetCustomersQuery, useUpdateCustomersMutation } from '../../lib/api/customers'
import TableWrapper from '../../components/table-wrapper';
import Modal from '../../components/modal/Modal';
import './customer.scss'
import Loading from '../../components/loading';

const Customer = () => {
    const [showModal, setShowModal] = useState(false)
    const { data } = useGetCustomersQuery()
    const [update, { data: updateData }] = useUpdateCustomersMutation()

    const updateUser = (e) => {
        e.preventDefault()
        console.log(fname)
        update((user?._id, showModal))
    }

    console.log(updateData)

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
                    data?.innerData ?
                        data?.innerData?.map((user, inx) => (
                            <TableWrapper key={user?._id} editUser={updateUser} user={user} id={inx} setEdit={setShowModal} />
                        )) : <Loading />
                }
            </ul>
            {
                showModal ? (
                    <Modal close={setShowModal} key={'1'} title={'Update User'} >
                        <form className="update-form">
                            <label htmlFor="" className='create-label'>First Name
                                <input onChange={(e) => setShowModal(p => ({ ...p, fname: e.target.value }))} value={showModal?.fname}
                                    className='create-input' type="text" />
                            </label>
                            <label htmlFor="" className='create-label'>Last Name
                                <input onChange={(e) => setShowModal(p => ({ ...p, lname: e.target.value }))} value={showModal?.lname}
                                    className='create-input' type="text" />
                            </label>
                            <label htmlFor="" className='create-label'>Address
                                <input onChange={(e) => setShowModal(p => ({ ...p, address: e.target.value }))} value={showModal?.address}
                                    className='create-input' type="text" />
                            </label>
                            <label htmlFor="" className='create-label'>Phone number
                                <input onChange={(e) => setShowModal(p => ({ ...p, phone_primary: e.target.value }))} value={showModal?.phone_primary}
                                    className='create-input' type="text" />
                            </label>
                            <label htmlFor="" className='create-label'>Budget
                                <input onChange={(e) => setShowModal(p => ({ ...p, budget: e.target.value }))} value={showModal?.budget}
                                    className='create-input' type="text" />
                            </label>
                            <button type='submit' className='update-btn'>Update</button>
                        </form>
                    </Modal>
                ) : <></>
            }
        </div>
    )
}

export default memo(Customer)