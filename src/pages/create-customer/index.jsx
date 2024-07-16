import React, { memo, useState } from 'react';
import { useCreateCustomersMutation } from '../../lib/api/customers';
import { useNavigate } from 'react-router-dom';
import './create-customer.scss';

const CreateCustomer = () => {
    const [newUser, setNewUser] = useState({
        fname: "",
        lname: "",
        phone_primary: "+9989",
        address: ", Uzbekiston",
        budget: 0
    });
    const [createUser, { data,error }] = useCreateCustomersMutation();
    const navigate = useNavigate();

    const handleCreateUser = async (e) => {
        e.preventDefault();
        try {
            await createUser(newUser)
            console.log('User created successfully', data);
            navigate('/admin/customer');
        } catch (err) {
            console.error('Failed to create user:', err);
        }
    };
    console.log('New User:', newUser);

    return (
        <section className='create'>
            <div className="create-customer">
                <h1 className='create-customer-h1'>Create user</h1>
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
                    <button className='create-btn' type='submit'>Create</button>
                </form>
                {error && <p className="error">{error.message}</p>}
            </div>
        </section>
    );
};

export default memo(CreateCustomer);
