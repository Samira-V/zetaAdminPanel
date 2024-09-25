


import './Dashboard.css'
import React from 'react'

import Button from '@mui/material/Button';
import { MdOutlineAddBox } from "react-icons/md";
import { CgSoftwareUpload } from "react-icons/cg";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AllFiles from "./../Dashboard/AllFiles";
import Footer from "../../Components/Footer/Footer";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";


// import { Link, useLocation } from 'react-router-dom'



export default function Dashboard() {
 
  return (
    <div className='page'>
      <div className="main-header">
        <div className="main-header-top d-flex align-items-center">
          <div className="main-header-left">
            <h4 className="title p-0">File Manager</h4>
          </div>
          {/* breadcrumb  */}
        
        </div>
        <div className="main-header-bottom">
          <Button variant="contained" href="#" className="btn">File Filter</Button>
        </div>
      </div>
      <div className="file-filter-section">
        <div className="file-filter-section-top d-flex align-items-center justify-content-between">
          <div className="search-files">
            <SearchOutlinedIcon />
            <input type="text" className="search-box" placeholder="Search here..." />
          </div>
          <div className="add-file">

            <Button variant="contained" className="add-file-btn add"> <MdOutlineAddBox className="add-icon" />Add New</Button>
            <Button variant="outlined" className="add-file-btn upload"><CgSoftwareUpload className="add-icon" />Upload</Button>
          </div>
        </div>
        <AllFiles title="All Files" txt="Lorem ipsum dolor sit amet." />
        <AllFiles title="Folders" txt=""
        />
        <AllFiles title="Files" txt="" />


      </div>
      <Footer />
    </div>
  )
}
