import React from 'react'
import './Categories.css'
import img11 from '../assets/women1.svg'
import img10 from '../assets/man-black.svg'
import img12 from '../assets/men-2.svg'
import img13 from '../assets/man-3.svg'
import img14 from '../assets/women-2.svg'
import img15 from '../assets/men-4.svg'
import img16 from '../assets/women-3.svg'
import img17 from '../assets/men-5.svg'
import img18 from '../assets/men-6.svg'
const Categories = () => {
	return (
		<div className='Categories-pages'>
			<div className="Categories_1pg-texts">
				<h1 className='categ'>Categories</h1>
				<button className='add-categ'>+Add Category</button>
			</div>

			<section className='Categories_2pg'>
				<div className="img-1">
					<img src={img10} alt="" className='men-black' />
					<h1 className='men'>Men Clothes</h1>
					<p className='men-p'>24 items</p>
				</div>
				<div className="img-2">
					<img src={img11} alt="" />
					<h1 className='men'></h1>
					<p className='men-p'></p>
				</div>

				<div className="img-2">
					<img src={img12} alt="" />
					<h1 className='men'>Accessories</h1>
					<p className='men-p'>43 items</p>
				</div>

				<div className="img-2">
					<img src={img13} alt="" />
					<h1 className='men'>Cotton Clothes</h1>
					<p className='men-p'>31 items</p>
				</div>

				<div className="img-2">
					<img src={img14} alt="" />
					<h1 className='men'>Summer Clothes</h1>
					<p className='men-p'>26 items</p>
				</div>

				<div className="img-2">
					<img src={img15} alt="" />
					<h1 className='men'>Wedding Clothes</h1>
					<p className='men-p'>52 items</p>
				</div>

				<div className="img-2">
					<img src={img16} alt="" />
					<h1 className='men'>Spring Collection</h1>
					<p className='men-p'>24 items</p>
				</div>

				<div className="img-2">
					<img src={img17} alt="" />
					<h1 className='men'>Casual  Clothes</h1>
					<p className='men-p'>52 items</p>
				</div>

				<div className="img-2">
					<img src={img18} alt="" />
					<h1 className='men'>Hats</h1>
					<p className='men-p'>26 items</p>
				</div>
			</section>
		</div>
	)
}

export default Categories