import React from 'react'
import "./Sidebar.css"
import { CiHome } from "react-icons/ci";
import { Link } from 'react-router-dom'
import { IoTicketOutline } from "react-icons/io5";
import { LiaFileSolid } from "react-icons/lia";


const Sidebar = () => {
	return (
		<div className='container'><br />
			<Link to={"/"}><CiHome/>Dashboard</Link><br /><br />
			<Link to={"/products"}><IoTicketOutline/>Products</Link><br /><br />
			<Link to={"/categories"}><LiaFileSolid/>Categories</Link>
		</div>
	)
}

export default Sidebar