
import React,{ useState } from 'react'
import { Link } from 'react-router-dom';
import CountryDrop from '../CountryDrop';
import logo from '../../assets/logo.webp'

import { IoSearch } from "react-icons/io5";
import Button from '@mui/material/Button';
import { LuUserRound } from "react-icons/lu";
import { IoBagOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { CiShop } from "react-icons/ci";
import { GiMeat } from "react-icons/gi";
import { FaAngleRight } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { GiCupcake } from "react-icons/gi";
import { MdEmojiFoodBeverage } from "react-icons/md";
import { FaBlogger } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";



export default function Header() {
  const [isopen,setisopen]=useState(false);

  return (
    <>
    <div className='headerWrapper'>
  <div className='top-strip bg-blue'>
<div className='container'>
    <p className='mb-0 mt-0 text-center'>
Due to the <b>COVID 19 </b>epidemic, orders may be processed with a slight delay</p>
</div>
  </div>

{/* Day-2 code */}
<header className='header'>
<div className='container'>
  <div className='row'>

<div className='logoImage d-flex col-sm-2 align-items-center'>
  <Link to={'/'}><img src={logo} alt='Company logo'/></Link>
</div>
<div className='col-sm-10 d-flex align-items-center second'>
<CountryDrop/>
{/* Day 3 work */}

<div className='hSearch ms-3 me-3'>
  <input type="text" placeholder='Search for products...'/>
  <Button><IoSearch /></Button>
</div>

{/* Part 3 in header */}
<div className='part-3 d-flex align-items-center ml-auto'>
<Button className='circle me-3'><LuUserRound /></Button>

<div className="cart d-flex align-items-center">
  <span className='price'>$4.50</span>

  <div className='position-relative ms-2'>
    <Button className='circle'><IoBagOutline /> </Button>
    <span className='count d-flex align-items-center justify-content-center'>5</span>
  </div>
</div>

</div>
</div>
  </div>
</div>
</header>

{/* Day-4 working with creating ALL CATE TAB */}
<nav>
  <div className='container'>
<div className="row">
<div className='col-sm-3 navpart1'>
<div className='catwrapper'> 
<Button className='allCartTab align-items-center' onClick={()=>setisopen(!isopen)} >
  <span className='icon1 me-2'><IoIosMenu /></span>
  <span className='text'>All Categories</span>
  <span className='icon2 ms-2'><FaAngleDown/></span>
</Button>

{/* Day-5 */}

<div  className={`sidebarnav ${isopen===true?'open':''}`}>
<ul>
  <li> <Button><Link to={"/"}><CiShop />Shop<FaAngleRight />
  </Link></Button>
  {/* Submenu create */}
<div className='submenu'>
  <Button><Link to={'/'}>Shop item 1</Link></Button>
  <Button><Link to={'/'}>Shop item 2</Link></Button>
  <Button><Link to={'/'}>Shop item 3</Link></Button>
  <Button><Link to={'/'}>Shop item 4</Link></Button>
</div>
</li>
<li><Button><Link to={"/"}><GiMeat /> Meats & Seafood
<FaAngleRight /></Link> </Button>
 {/* Submenu create */}
 <div className='submenu'>
  <Button><Link to={'/'}> Seafood 1</Link></Button>
  <Button><Link to={'/'}>Seafood 2</Link></Button>
  <Button><Link to={'/'}>Seafood 3</Link></Button>
</div>
</li>
<li><Button><Link to={"/"}><GiMeat /> Bakery</Link> </Button></li>
<li><Button><Link to={"/"}><GiMeat /> Bevrages</Link> </Button></li>
</ul>
</div>
</div></div>

{/* Day-7 code Navpart-2 */}

<div className='col-sm-9 navpart2 d-flex align-items-center'>
<ul className='list list-inline sm-auto'>
<li className='list-inline-item'><Link to={"/"}><IoMdHome/>Home</Link></li>
<li className='list-inline-item'><Link to={"/"}><CiShop />Shop</Link>

{/* create submenu inside SHOP */}
<div className='submenu shadow'>
<Link to={"/"}>Clothes</Link>
<Link to={"/"}>Footwear</Link>
<Link to={"/"}>Watches</Link>
<Link to={"/"}>Bags</Link>
</div>
</li>  {/*  shop submenu closed here */}

<li className='list-inline-item'><Link to={"/"}><GiMeat />Meats & Seafood</Link></li>
<li className='list-inline-item'><Link to={"/"}><GiCupcake />Bakery</Link></li>
<li className='list-inline-item'><Link to={"/"}><MdEmojiFoodBeverage />Bevrages</Link></li>
<li className='list-inline-item'><Link to={"/"}><FaBlogger />Blog</Link></li>
<li className='list-inline-item'><Link to={"/"}><IoIosContact />Contact</Link></li>

</ul>
</div>


</div>
</div>
</nav>

    </div>
    </>
  )
}


