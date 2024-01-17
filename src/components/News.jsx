import React, { useState } from 'react'
import { Select, Typography, Row, Col, Card } from 'antd'
import moment from 'moment'

import { useGetCryptosNewsQuery } from '../services/cryptoNewsApi'
import { Title } from 'chart.js'

// const {Text, }

const News = () => {

  const {data:cryptosNews} = useGetCryptosNewsQuery()

  const [newsData, setNewsData] = useState('')
  console.log(cryptosNews)


  if(!cryptosNews?.coindesk) return 'loding....'


  return (
    <>
      <Row gutter={[24, 24]} >

        {
          newsData.map((news, i) => (
            <Col key={i} lg={8} sm={12} xs={24}>
              <Card hoverable >
                <a href={news.url} >
                  <Title>{news.title}</Title>
                  <p>{news.description}</p>
                </a>
              </Card>
            </Col>
          ))
        }

        <Col>

        </Col>
      </Row>
    </>
  )
}

export default News
