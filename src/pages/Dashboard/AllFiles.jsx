import React from 'react'
import FileBox from "../../Components/FileBoxes/FileBox";

export default function AllFiles(props) {
  return (
    
    <div className="file-boxes">
    <h2 className='title'>{props.title}</h2>
    <p className='txt'>{props.txt}</p>
    <div className="files d-flex flex-wrap">






    <FileBox name="logo.Psd" size ="2.0"  lastOpen="2 hours ago" className = "txt-primary" icon = "FaRegFileImage"/>
    <FileBox name="Project.Zip" size ="4.0"  lastOpen="3 hours ago" className = "txt-secondery" icon = ""/>
    <FileBox name="Requirements.Txt" size ="3.0"  lastOpen="8 hours ago" className = "txt-succes" icon = "" />
    <FileBox name="Backend.Xls" size ="5.0"  lastOpen="1 hours ago" className = "txt-info" icon = ""/>
    </div>
  </div>
  )
}
