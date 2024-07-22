import React, { memo } from 'react'
import { useGetSellerQuery } from '../../lib/api/sellerApi'
import Loading from '../../components/loading'
import TableWrapper from '../../components/table-wrapper'
import './sellers.scss'

const Seller = () => {
    const { data: sellers } = useGetSellerQuery()
    const sellersData = sellers?.innerData

    return (
        <section className='sellers'>
            <ul className="customers-title">
                <li className='id'>ID</li>
                <li className='name'>Name</li>
                <li className='address'>Address</li>
                <li className='tel'>TEl</li>
                <li className='price'>Budget</li>
                <li className='more'>Batafsil</li>
                <li className='btns'>Buttuons</li>
            </ul>
            <ul className='sellers__li'>
                {
                    sellersData ?
                        sellersData?.map((seller, inx) => (
                            <TableWrapper title="seller" key={seller?._id} id={inx} user={seller} />
                        )) : <Loading />
                }
            </ul>
        </section>
    )
}

export default memo(Seller)