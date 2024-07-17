import { memo, useState } from 'react'
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useGetCustomersQuery, useUpdateCustomersMutation } from '../../lib/api/customers'
import TableWrapper from '../../components/table-wrapper';
import Modal from '../../components/modal/Modal';
import Loading from '../../components/loading';
import './customer.scss'

const Customer = () => {
    const [limit, setLimit] = useState(5)
    const [pin, setPin] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const { data } = useGetCustomersQuery({ limit: 8 })
    const [update, { data: updateData }] = useUpdateCustomersMutation()
    const handleChange = (_, value) => {
        setLimit(value)
    }
    const pageCount = Math.ceil(data?.totalCount / limit) || 1;
    console.log(updateData)
    console.log(pageCount)
    const updateUser = (e) => {
        e.preventDefault()
        console.log(fname)
        update((user?._id, showModal))
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
                    data?.innerData ?
                        data?.innerData?.map((user, inx) => (
                            <TableWrapper key={user?._id} id={inx} editUser={updateUser}
                                pin={pin} setPin={setPin} user={user} setEdit={setShowModal} />
                        )) : <Loading />
                }
            </ul>
            <Stack className='stack' spacing={2}>
                <Pagination count={pageCount} onChange={handleChange} color="primary" />
            </Stack>
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
                            <p className='create-label'>
                                <button type='submit' className='update-btn'>Update</button>
                            </p>
                        </form>
                    </Modal>
                ) : <></>
            }
        </div>
    )
}

export default memo(Customer)