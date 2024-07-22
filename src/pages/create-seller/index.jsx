import React, { memo, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../create-customer/create-customer.scss'
import { useCreateSellerMutation } from '../../lib/api/sellerApi';

const CreateSeller = () => {
    const [newUser, setNewUser] = useState({
        fname: "",
        lname: "",
        phone_primary: "+998",
        address: " Uzbekiston",
        budget: 0
    });
    const [createSeller, { data, error }] = useCreateSellerMutation();
    const navigate = useNavigate();

    const handleCreateUser = async (e) => {
        e.preventDefault();
        try {
            await createSeller(newUser)
            console.log('Seller created successfully', data);
            navigate('/admin/seller');
        } catch (err) {
            console.error('Failed to create Seller:', err);
        }
    };

    return (
        <section className='create'>
            <div className="create-customer">
                <h1 className='create-customer-h1'>Create Seller</h1>
                <form onSubmit={handleCreateUser} className="create-user">
                    <label htmlFor="fname" className='label'>
                        <span>First Name</span>
                        <input
                            id='fname'
                            required
                            value={newUser.fname}
                            onChange={e => setNewUser(prev => ({ ...prev, fname: e.target.value }))}
                            className='input'
                            type="text"
                            placeholder="First Name"
                        />
                    </label>
                    <label htmlFor="lname" className='label'>
                        <span>Last Name</span>
                        <input
                            id='lname'
                            required
                            value={newUser.lname}
                            onChange={e => setNewUser(prev => ({ ...prev, lname: e.target.value }))}
                            className='input'
                            type="text"
                            placeholder="Last Name"
                        />
                    </label>
                    <label htmlFor="phone_primary" className='label'>
                        <span>Phone Number</span>
                        <input
                            id='phone_primary'
                            required
                            value={newUser.phone_primary}
                            onChange={e => setNewUser(prev => ({ ...prev, phone_primary: e.target.value }))}
                            className='input'
                            type="text"
                            placeholder="Phone Number"
                        />
                    </label>
                    <label htmlFor="address" className='label'>
                        <span>Address</span>
                        <input
                            id='address'
                            value={newUser.address}
                            onChange={e => setNewUser(prev => ({ ...prev, address: e.target.value }))}
                            className='input'
                            type="text"
                            placeholder="Address"
                        />
                    </label>
                    <label htmlFor="budget" className='label'>
                        <span>Budget</span>
                        <input
                            id='budget'
                            required
                            value={newUser.budget}
                            onChange={e => setNewUser(prev => ({ ...prev, budget: Number(e.target.value) }))}
                            className='input'
                            type="number"
                            placeholder="Budget"
                        />
                    </label>
                    <label htmlFor="button" className='label'>
                        <span>Button</span>
                        <button className='create-btn' id='button' type='submit'>Create</button>
                    </label>
                </form>
                {error && <p className="error">{error.message}</p>}
            </div>
        </section>
    )
}

export default memo(CreateSeller)