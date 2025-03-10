import React from 'react'
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa";

 function CountryDrop() {
  return (
    <div>
<Button className="countryInfo">
<div className='d-flex flex-column info'> <span className='label'>Your Location</span><span className='name'>India</span></div>
<span className='ms-auto'><FaAngleDown /></span>
</Button>
</div>
  )
}



export default CountryDrop;