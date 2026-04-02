import React from 'react'
import "./Navbar.css"
import icongroup from "../assets/Group.svg"
import avatar from "../assets/avatar.png"

const Navbar = () => {
	return (
		<div>
			<nav>
				<div className="logo">
					<img src={icongroup} alt="" width={41}/>
					<h2>Modernize</h2>
				</div>
				<div className="searchbox">
					<input type="text" placeholder='Search...'/>
				</div>
				<div className="avatar">
					<img src={avatar} alt="" />
					<p>X’eriya Ponald</p>
				</div>
			</nav>
		</div>
	)
}

export default Navbar