import React from 'react'


import { Link, useParams} from 'react-router-dom'

export default function MainPost() {
let params = useParams()
console.log(params.subPage)
  return (
    <div>
     <Link to= {`dashboard/${params.subPage}`}></Link>
     
    </div>
  )
}

