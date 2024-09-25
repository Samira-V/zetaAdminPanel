import React from 'react'
import './FileBox.css'
import { FaRegFileImage } from "react-icons/fa";
export default function FileBox(props) {
    return (
        <div className="file-box">

            <div className="file-top p-3 mb-2">
                <i class="fa fa-ellipsis-v f-14 ellips"></i>
              <FaRegFileImage className={`file-icon ${props.className }`}/>
            </div>
            <div className='d-flex flex-column file-manager'>
                <h4 className="file-name">{props.name}</h4>
                <p className=" mb-1 file-size">{props.size}</p>
                <p className='date'> <b>last open : </b>{props.lastOpen}</p>
            </div>
        </div>




    )
}
