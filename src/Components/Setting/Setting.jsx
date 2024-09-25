import React, { useState } from 'react'
import './Setting.css'
import { IoSettingsOutline } from "react-icons/io5";
import { IoColorFillOutline } from "react-icons/io5";



export default function Setting() {
  const [showSetting, setShowSetting] = useState(false)
  const [color, setColor] = useState("#000")

  const settingHandler = () => {
    alert("setting")
    setShowSetting(true)
  }

  return (
  <div className="setting-container">
      <div className='setting'>
        <IoSettingsOutline className='setting-icon' onClick={settingHandler}></IoSettingsOutline>

        <IoColorFillOutline className='setting-icon' />
      </div>
      <div className="setting-box">
        <div className="light-mode">
          <input type="checkbox" id="light-mode" name="light-mode" value="light"/>
        </div>
        <div className="dark-mode">
          <input type="checkbox" id="dark-mode" name="dark-mode" value="dark"/>
        </div>

      </div>
      </div>
  )
}
