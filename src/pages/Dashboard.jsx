import img1111 from "../assets/Orders chart.svg"
import img222 from '../assets/stats.svg'
import "./Dashboard.css"

const Dashboard = () => {
	return (
		<div className='Container'>
			<h1>Dashboard</h1> <br /><br />
			<img src={img222} alt="" /> <br /><br />
			<img src={img1111} alt="" /><br /><br />
			{/* <img src={img444} alt="" /> */}
			{/* <img src={img333} alt="" /> */}
		</div>
	)
}

export default Dashboard