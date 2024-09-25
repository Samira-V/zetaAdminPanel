import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './BreadCrumb.css'
import { CiHome } from "react-icons/ci";
import { CgFormatSlash } from "react-icons/cg";





export default function BreadCrumb() {

  const location = useLocation()
  const currentRoute = location.pathname
  console.log(currentRoute.split('/'))
  let routeArray = currentRoute.split('/')
  console.log(routeArray)
  console.log(routeArray[routeArray.length - 1])
  return (

    <div className="main-header-right d-flex w-100 align-items-center justify-content-between ">
      <div className="title">
        <h4>{routeArray[routeArray.length - 1]}</h4>
      </div>
      <div className="breadCrumb-right">
      {routeArray?.map((item,index) => (

        <Link to={`${item}`} className="ms-2 fs-6 breadCrumb-link" key={index}>{item ===
          "" ? <CiHome className="home-icon" /> : item}
          {item.id !== routeArray.length ?
            <CgFormatSlash sx={{ fontSize: 30, stroke: "#ffffff", strokeWidth: 0.8 }} /> : null
          }
        </Link>

      )

      )}

      </div>
    </div>
  )
}









