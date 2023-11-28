import React from "react";
import { Router, Route, Link, Routes } from 'react-router-dom'
import { Layout, Typography, Space } from "antd";

import {Navbar, Homepage, Exchanges, News, Cryptocurrencies, CryptoDetales} from "./components";
import './App.css'


const App = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar/>
            </div>
            <div className="main">
                
                <Layout>
                    <div className="routes">
                        <Routes>
                            <Route path="/" element={<Homepage></Homepage>}/>
                            <Route path="/exchanges" element={<Exchanges></Exchanges>}/>
                            <Route path="/cryptocurrencies" element={<Cryptocurrencies></Cryptocurrencies>}/>
                            <Route path="/crypto/:coinId" element={<CryptoDetales></CryptoDetales>}/>
                            <Route path="/news" element={<News></News>}/>
                        </Routes>
                    </div>
                </Layout>
                
                <div className="footer" >
                    <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
                        Crypton <br/>
                        All righits
                    </Typography.Title>
                    
                    <Space style={{color: 'black', textAlign: 'center'}}>
                        <Link to='/'>Home</Link>
                        <Link to='/cryptocurrencies' >Cryptocurrencies</Link>
                        <Link to='/exchanges'>Exchanges</Link>
                        <Link to='/news'>News</Link>
                    </Space>
                </div>
            </div>
        </div>
    )
};

export default App