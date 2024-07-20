import { memo, useState } from 'react'
import { useGetCustomersQuery, useUpdateCustomersMutation } from '../../lib/api/customers'
import TableWrapper from '../../components/table-wrapper';
import Modal from '../../components/modal/Modal';
import Loading from '../../components/loading';
// Pagination
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
// Pagination end
import './customer.scss'

const Customer = () => {
    const [paidToday, setPaidToday] = useState(2)
    // selects filter
    const [debt, setDebt] = useState(2)
    const [budget, setBudget] = useState(0)
    const [createdAt, setCreatedAt] = useState(-1)

    const [page, setPage] = useState(1)
    const [showModal, setShowModal] = useState(false)

    const { data } = useGetCustomersQuery({ skip: page - 1, paidToday, debt, createdAt, budget })
    const [update, { isLoading }] = useUpdateCustomersMutation()

    const handleChange = (event, value) => {
        setPage(value)
    }
    const lengthPage = Math.ceil(data?.totalCount / 10)

    const updateUser = (event) => {
        event.preventDefault()
        update((user?._id, showModal))
    }



    return (
        <div className='customers'>
            <div className="all__filter">
                <label htmlFor="paid-today">
                    <span>Paid Today</span>
                    <select id="paid-today" className="debt" onChange={(e) => setPaidToday(e.target.value)} >
                        <option value={0} disabled className='id'>Paid Today</option>
                        <option value={2} className='id'>Barchasi</option>
                        <option value={1} className='name'>To`lov qilgan</option>
                        <option value={-1} className='name'>To`lov qilmagan</option>
                    </select>
                </label>
                <label htmlFor="debts">
                    <span>Debt</span>
                    <select id="debts" className="debt" onChange={(e) => setDebt(e.target.value)} >
                        <option value={0} disabled className='id'>Debt</option>
                        <option value={2} className='id'>Barchasi</option>
                        <option value={-1} className='name'>Qarzdorlar</option>
                        <option value={1} className='name'>Haqdorlar</option>
                        <option value={0} className='name'>Nollar</option>
                    </select>
                </label>
                <label htmlFor="createdAt">
                    <span>CreateAt</span>
                    <select id="createdAt" className="debt" onChange={(e) => setCreatedAt(e.target.value)} >
                        <option value={'-1'} className='name'>Latest</option>
                        <option value={'1'} className='name'>Oldest</option>
                    </select>
                </label>
                <label htmlFor="budget">
                    <span>Budget</span>
                    <select id="budget" className="debt" onChange={(e) => setBudget(e.target.value)} >
                        <option value={0} className='id'>Barchasi</option>
                        <option value={-1} className='name'>qarzdorlar</option>
                        <option value={1} className='name'>Haqdorlar</option>
                    </select>
                </label>
            </div>

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
                                user={user} setEdit={setShowModal} />
                        )) : <Loading />
                }
            </ul>
            {/* Pagination */}
            <Stack spacing={2} className='stack'>
                <Pagination size='medium' count={lengthPage} page={page} onChange={handleChange} color="primary" />
            </Stack>
            {/* Pagination end */}
            {
                showModal ? (
                    <Modal close={setShowModal} key={'1'} title={'Update User'} >
                        <form className="update-form">
                            <label className='create-label'>First Name
                                <input onChange={(e) => setShowModal(p => ({ ...p, fname: e.target.value }))} value={showModal?.fname}
                                    className='create-input' type="text" />
                            </label>
                            <label className='create-label'>Last Name
                                <input onChange={(e) => setShowModal(p => ({ ...p, lname: e.target.value }))} value={showModal?.lname}
                                    className='create-input' type="text" />
                            </label>
                            <label className='create-label'>Address
                                <input onChange={(e) => setShowModal(p => ({ ...p, address: e.target.value }))} value={showModal?.address}
                                    className='create-input' type="text" />
                            </label>
                            <label className='create-label'>Phone number
                                <input onChange={(e) => setShowModal(p => ({ ...p, phone_primary: e.target.value }))} value={showModal?.phone_primary}
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