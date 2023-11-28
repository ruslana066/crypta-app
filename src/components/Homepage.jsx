import React from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Typography, Row, Col, Statistic } from 'antd'

import { useGetCryptosQuery } from '../services/cryptoApi'
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';


const Homepage = () => {

  const {data, isFetching} = useGetCryptosQuery()
  
  const globalStats = data?.data?.stats

  console.log(globalStats)

  if(isFetching) {
    return ('feathing')
  }

  return (
    <>
    <Typography.Title className='heading' level={2}>
      Global Crypto Stats
    </Typography.Title>
      <Row>
          <Col span={12} > <Statistic title="Total cryptos" value={globalStats.total} /> </Col>
          <Col span={12} > <Statistic title="Total Exschenges" value={globalStats.totalExchanges} /> </Col>
          <Col span={12} > <Statistic title="Total Marcet Cap" value={globalStats.totalMarketCap} /> </Col>
          <Col span={12} > <Statistic title="Total 24h valume" value={globalStats.total24hVolume} /> </Col>
          <Col span={12} > <Statistic title="Total Marcets" value={globalStats.totalMarkets} /> </Col>
          <Col span={12} > <Statistic title="Total cryptocurrencies" value={globalStats.totalCoins} /> </Col>
      </Row>

      <div  className='home-heading-container'>
          <Typography.Title level={2}>Top 10 cryptos</Typography.Title>
          <Typography.Title level={3}><Link to="/cryptocurrencies">show more</Link></Typography.Title>
      </div>

      <Cryptocurrencies />

      <div  className='home-heading-container'>
          <Typography.Title level={2}>Lastests news</Typography.Title>
          <Typography.Title level={3}><Link to='/news'>show more</Link></Typography.Title>
      </div>
      <News simplified/>
    </>
  )
}

export default Homepage
