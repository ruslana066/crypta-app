import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Col, Row, Typography, Select } from 'antd'
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';
import millify from 'millify';
import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from '../services/cryptoApi';
import LineChart from './LineChart';

const {Title, Text} = Typography
const {Option} = Select

const CryptoDetales = () => {

  const { coinId } = useParams()

  const {data, isFetching} = useGetCryptoDetailsQuery(coinId);
  const cryptoDetails = data?.data?.coin;
  const [timeperiod, setTimeperiod] = useState('7d');


  const {data:coinHistory} = useGetCryptoHistoryQuery({coinId, timeperiod})

  console.log(coinHistory)

  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];



  const stats = [
    { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <DollarCircleOutlined /> },
    { title: 'Rank', value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    { title: '24h Volume', value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`, icon: <ThunderboltOutlined /> },
    { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <DollarCircleOutlined /> },
    { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <TrophyOutlined /> },
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <FundOutlined /> },
    { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
    { title: 'Aprroved Supply', value: cryptoDetails?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
    { title: 'Total Supply', value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}`, icon: <ExclamationCircleOutlined /> },
    { title: 'Circulating Supply', value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}`, icon: <ExclamationCircleOutlined /> },
  ];

  if(isFetching) return ('loading...')

  return (
    <div>


      <Col className='coin-detail-container' >

        <Col className='coin-heading-conteiner' >
            <Title level={3} >
              {cryptoDetails?.name}   ({cryptoDetails?.symbol})
            </Title>
            <p>
              {cryptoDetails?.name} live price in US Dollar (USD). View value statistic, marcet cap and sopply.
            </p>
        </Col>

        <Select defaultValue='7d' className='select-timeperiod' placeholder='select time period' onChange={(val) => setTimeperiod(val)} >
            {
              time.map((data, i) => <Option key={i}>{data}</Option>)
            }
        </Select>

        <LineChart coinHistory={coinHistory}  currentPrice={cryptoDetails?.price}  coinNews={cryptoDetails?.name}  />

        <div className='flex' >

          <Col className='stats-container' lg={12}>
              <Col className='coin-value-statistics'>
                <Col className='coin-value-statistics-heading'>
                  <Title level={4} className='coin-details-heading'>
                  {cryptoDetails.name} value statistics
                  </Title>
                  <p>An overview showing the statistic of {cryptoDetails.name} such as the base , the rank and trading volume</p>
                </Col>

                {stats.map(({icon, title, value}) => (
                  <Col className='coin-stats' key={title}>
                    <Col className='coin-stats-name'>
                      <Text>{icon}</Text>
                      <Text>{title}</Text>
                    </Col>
                    <Text className="stats">{value}</Text>
                  </Col>
                ))}
              </Col>
          </Col>

          <Col className='other-stats-info stats-container' lg={12}>
              <Col className='coin-value-statistics'>
                <Col className='coin-value-statistics-heading'>
                  <Title level={4} className='coin-details-heading'>
                    {cryptoDetails.name} value statistics
                  </Title>
                  <p>An overview showing the statistic of {cryptoDetails.name} such as the base , the rank and trading volume</p>
              </Col>

                {genericStats.map(({icon, title, value}) => (
                  <Col className='coin-stats' key={title}>
                    <Col className='coin-stats-name'>
                      <Text>{icon}</Text>
                      <Text>{title}</Text>
                    </Col>
                    <Text className="stats">{value}</Text>
                  </Col>
                ))}
              </Col>
          </Col>

        </div>
      </Col>


      <div className='coin-desc-link flex m'>

        <div>
        <Title level={4} className='coin-details-heading'>
          What is {cryptoDetails?.name} 
        </Title>
        <p className=''>
          In the vast expanse of the digital age, where technology intertwines with the fabric of our daily lives, the pursuit of knowledge and innovation stands as a driving force. From the boundless realms of artificial intelligence to the intricate dance of ones and zeros in the vast landscape of computer science, the modern world is witness to a transformative era.
        </p>
        </div>
        

        <div className='div-p'>
          <Title level={4} className='coin-details-heading'>
            What is {cryptoDetails?.name} link
          </Title>
          
          <Col>
            {
              cryptoDetails?.links?.map((link) => (
                <Row >
                    <Title level={5}  className='flex flex-direction'>
                      {link?.type}
                      <a href={link?.url} target='_blank'>{link?.name}</a> 
                    </Title>
                      
                </Row>
              ))
            }
          </Col>
        </div>

      </div>
      
      


    </div>
  )
}

export default CryptoDetales
