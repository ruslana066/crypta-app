import React from 'react'
import { Chart as ChartJS, registerables} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { Col, Row, Typography } from 'antd'



ChartJS.register(...registerables)

const LineChart = ({coinHistory, currentPrice, coinName}) => {

    const coinPrice = [];
    const coinTimeStamp = []

    for(let i=0; i<coinHistory?.data?.history?.length; i++){
        coinPrice.push(coinHistory?.data?.history[i].price)
    }
    for(let i=0; i<coinHistory?.data?.history?.length; i++){
        coinTimeStamp.push(coinHistory?.data?.history[i].timestamp)
    }


    console.log(coinTimeStamp)
    const data = {
        labels: coinTimeStamp,
        datasets: [{
            label: 'Price in USD', 
            data: coinPrice,
            fill: false,
            backgroundColor: '#800080',
            borderColor: '#6f2da8'
        }]
    }

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true
                    },
                },
            ],
        },
    }

  return (
    <>
      <Row className='chart-header'>
        <Typography.Title className='chart-title' level={2} >Price chart</Typography.Title>
        <Col>
            <Typography.Title level={5} className='price-change'>Change : {coinHistory?.data?.change}</Typography.Title>
            <Typography.Title level={5} className='current-price'>Current {coinName} Price: ${Math.floor(currentPrice)} </Typography.Title>
        </Col>
        <Line data={data} options={options}/>
      </Row>
    </>
  )
}

export default LineChart
