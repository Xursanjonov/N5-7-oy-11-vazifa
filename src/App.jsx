import React, { Fragment, memo } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Login from './pages/login/Login'
import Customer from './pages/customer/Customer'
import CreateCustomer from './pages/create-customer'
import CreateSeller from './pages/create-seller'
import Order from './pages/order'
import Seller from './pages/seller/Seller'
import Profile from './pages/profile'
import NotFound from './pages/not-found'

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/admin/' element={<Layout />} >
          <Route path='customer' element={<Customer />} />
          <Route path='create-customer' element={<CreateCustomer />} />
          <Route path='order' element={<Order />} />
          <Route path='seller' element={<Seller />} />
          <Route path='create-seller' element={<CreateSeller />} />
          <Route path='customer/:customerId' element={<Customer />} />
          <Route path='profile' element={<Profile />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Fragment>
  )
}

export default memo(App)