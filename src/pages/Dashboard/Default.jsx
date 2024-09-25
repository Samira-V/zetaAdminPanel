
import { useState, useEffect } from 'react'
import * as React from 'react';
import './Default.css'
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb'
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Footer from "../../Components/Footer/Footer";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import {
  AreaChart,
  Area,
  Tooltip,
} from "recharts";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,

  Rectangle,
} from "recharts"

import { lineChartsData } from './../../data/datas'
import { barChartsData } from './../../data/datas'



export default function Default() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => {
        setUsers(users)
      })
  }

   ,[])






  const options = [
    'Today',
    'Yesterday',
    'Tommorow',

  ];
  const usersInfo = [
    'Name',
    ' UserName',
    'Email',

  ]

  const ITEM_HEIGHT = 48;


  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [data, setData] = useState(lineChartsData)
  const [barDatas, setBarDatas] = useState(barChartsData)

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${label} : ${payload[0].value}`}</p>

          <p className="desc">statistic</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className='page'>

      <BreadCrumb />

      <div className="container d-flex justify-content-between gap-2 ">
        <div className="row d-flex justify-content-between">
          <div className="card col-lg-6 ">
            <div className="card-body">
              <h5 className="card-title">Hello, Harry Mendez</h5>
              <div className="card-content d-flex align-items-center justify-content-between">
                <div className="card-content-left">
                  <p className="card-text">Welcome back, your dashboard is ready!</p>
                  <button className='card-btn'>Get Started </button>
                </div>
                <div className="card-content-right">

                  <img src="/default-1.svg" alt="" className='card-img' />
                </div>
              </div>
            </div>
          </div>
          <div className="card col-lg-6 ">

            <div className="card-body earning-back">
              <div className="earning-back-content d-flex">
                <img src="/avatar.jpg" alt="" className='avatar' />
                <h4 className='mt-4'>Today's Earning</h4>
                <span>(mon 15-sun 21)</span>
                <p>$354.7</p>

                <div className="chartBox" style={{ width: "80%", height: "100%" }}>
                  <AreaChart width={450} height={60} data={data}
                  >


                    < defs>
                      <linearGradient id="colorUv" x1="1" y1="1" >
                        <stop offset="30%" stopColor="#B9CDE2" stopOpacity={0.5} />
                        <stop offset="95%" stopColor="#ECEEF2" stopOpacity={0.5} />
                      </linearGradient>
                    </defs>



                    <Tooltip />
                    <Area type="monotone" dataKey="sum" stroke="#10539C" strokeWidth={4} fill="url(#colorUv)" fillOpacity={5} />

                  </AreaChart>

                </div>



              </div>
            </div>
          </div>
          <div className="card col-lg-6">
            <div className="card-body bar-chart">
              <BarChart
                width={500}
                height={300}
                data={barDatas}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >

                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Bar
                  dataKey="uv"
                  fill="#1E2F65"
                  barSize={10}
                  activeBar={<Rectangle fill="#1E2F65" stroke="transparent" />}

                />

              </BarChart>
            </div>
          </div>
          <div className="card col-lg-6">
            <div className="card-body newsContainer bg-white">
              <div className="top d-flex position-relative">
                <h3 className='title'>News & Update</h3>
                <div>
                  <IconButton
                    className='news-menuIcon'
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? 'long-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    id="long-menu"
                    MenuListProps={{
                      'aria-labelledby': 'long-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}

                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    PaperProps={{
                      style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',

                      },
                    }}
                  >
                    {options.map((option) => (
                      <MenuItem className='menuItem' key={option} selected={option === 'Today'} onClick={handleClose}>
                        {option}
                      </MenuItem>
                    ))}
                  </Menu>
                </div>


              </div>
              <div className="news-List-Container ">
                <div className="news-item d-flex" >
                  <div className="left-part d-flex">
                    <img src="/news/rectangle-29.jpg" className='news-img' alt="" />
                    <div className="disc ms-4">
                      <a href="" className='news-link'><p className='news-title'>Google Project Apply Review</p></a>
                      <p className='news-txt'>Lorem ipsum dolor sit amet.</p>
                    </div>
                  </div>
                  <div className="right-part">
                    <div className="time">
                      <p>1 hour ago</p>
                    </div>
                  </div>
                </div>
                <div className="news-item d-flex" >
                  <div className="left-part d-flex">
                    <img src="/news/rectangle-26.jpg" className='news-img' alt="" />
                    <div className="disc ms-4">
                      <a href="" className='news-link'><p className='news-title'>Google Project Apply Review</p></a>
                      <p className='news-txt'>Lorem ipsum dolor sit amet.</p>
                    </div>
                  </div>
                  <div className="right-part">
                    <div className="time">
                      <p>8 hours ago</p>
                    </div>
                  </div>
                </div>
                <div className="news-item d-flex" >
                  <div className="left-part d-flex">
                    <img src="/news/rectangle-27.jpg" className='news-img' alt="" />
                    <div className="disc ms-4">
                      <a href="" className='news-link'><p className='news-title'>Google Project Apply Review</p></a>
                      <p className='news-txt'>Lorem ipsum dolor sit amet.</p>
                    </div>
                  </div>
                  <div className="right-part">
                    <div className="time">
                      <p>1 years ago</p>
                    </div>
                  </div>
                </div>
                <div className="news-item d-flex" >
                  <div className="left-part d-flex">
                    <img src="/news/rectangle-29.jpg" className='news-img' alt="" />
                    <div className="disc ms-4">
                      <a href="" className='news-link'><p className='news-title'>Google Project Apply Review</p></a>
                      <p className='news-txt'>Lorem ipsum dolor sit amet.</p>
                    </div>
                  </div>
                  <div className="right-part">
                    <div className="time">
                      <p>1 hour ago</p>
                    </div>
                  </div>
                </div>
                <div className="news-item d-flex" >
                  <div className="left-part d-flex">
                    <img src="/news/rectangle-28.jpg" className='news-img' alt="" />
                    <div className="disc ms-4">
                      <a href="" className='news-link'><p className='news-title'>Google Project Apply Review</p></a>

                      <p className='news-txt'>Lorem ipsum dolor sit amet.</p>
                    </div>
                  </div>
                  <div className="right-part">
                    <div className="time">
                      <p>1 week ago</p>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
          <div className="card col-lg-6">
            <div className="card-body bg-white">
              <div className="top d-flex position-relative">
                <h3 className='title'>Usres</h3>
                <div>
                  <IconButton
                    className='news-menuIcon'
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? 'long-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    id="long-menu"
                    MenuListProps={{
                      'aria-labelledby': 'long-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}

                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    PaperProps={{
                      style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',

                      },
                    }}
                  >
                    {usersInfo.map((option) => (
                      <MenuItem className='menuItem' key={option} selected={option === 'Today'} onClick={handleClose}>
                        {option}
                      </MenuItem>
                    ))}
                  </Menu>
                </div>


              </div>
              <div className="project-list">
                <TableContainer component={Paper} className='mt-4'
                >
                  <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                    <TableHead className='table-head'>
                      <TableRow>
                        <TableCell >Name</TableCell>
                        <TableCell >Phone</TableCell>
                        <TableCell >Email</TableCell>
                        <TableCell >Address</TableCell>

                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {users.map(user => (
                        <tr

                          key={user.id}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <td component="th" className='p-2 '
                          >
                            {user.username}
                          </td>
                          <td component="th" >
                            {user.phone}
                          </td>
                          <td component="th" >
                            {user.email}
                          </td>
                          <td component="th" >
                              {user.address.zipcode}
                          </td>


                        </tr>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

