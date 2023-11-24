import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeDutlined, MoneyCollectOutlinned, BuldOutlined, FundOutlined, MenuOutlined } from "@ant-design/icons"

import icon from '../img/logo.jpg';

const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className='logo-container'>
        <Avatar src={icon} size='large'/>
        <Typography.Title className='logo' level={2} >
            <Link to='/'>Crypton</Link>
        </Typography.Title>
      </div>
    </div>
  )
}

export default Navbar