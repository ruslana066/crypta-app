import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from 'antd'

import { useGetCryptosQuery } from '../services/cryptoApi'

const Cryptocurrencies = ({simplified}) => {

  const count = simplified ? 10 : 50

  const {data:cryptosList, isFetching} = useGetCryptosQuery(count)

  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins || []);

  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter( (item) => item.name.toLowerCase().includes(searchTerm) )

    setCryptos(filteredData)
  }, [cryptosList, searchTerm])

  if(isFetching) return 'loading'

  return (
    <>
      {
        !simplified && (
          <div className='search-crypto'>
            <Input
              placeholder='search...'
              onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
            />
          </div>
        )
      }
      
      <Row className='crypto-card-container'>
        {
          cryptos?.map((crypto) => (
            <Col key={crypto.uuid} xs={24} sm={12} lg={6} className='crypto-card' >
              <Link key={crypto.uuid} to={`/crypto/${crypto.uuid}`} > 
                <Card title={`${crypto.rank}. ${crypto.name}`} extra={<img className='crypto-image' src={crypto.iconUrl} />} >
                  <p>Price: {crypto.price}</p>
                  <p>Marcet Cap: {crypto.MarcetCap}</p>
                  <p>Daily change: {crypto.change}</p>
                </Card>
              </Link>
            </Col>
          ))
        }
      </Row>
    </>
  )
}
// .slice(0, 10)?
export default Cryptocurrencies
