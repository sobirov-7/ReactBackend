import React, { useState } from 'react'
import './Product.css'
import logo from '../assets/Bitmap (1).png'
import logo2 from '../assets/Bitmap.png'
import logo3 from '../assets/Bitmap (3).png'
import logo4 from '../assets/Image.png'
import logo5 from '../assets/Image (1).png'

const Productss = [
    { id: 1, img: logo2, title: "Men gray hoodie", title2: "Hoodies", Inventory: "96 in stock", Color: "Black", Price: "$49.90", Raiting: "5.0(32 Votes)" },
    { id: 2, img: logo4, title: "Women Striped T-shirt", title2: "T-shirt", Inventory: "56 in stock", Color: "White", Price: "$34.90", Raiting: "4.8(24 Votes)" },
    { id: 3, img: logo, title: "Women Striped T-shirt", title2: "T-shirt", Inventory: "32 in stock", Color: "White", Price: "$40.90", Raiting: "5.0(54 Votes)" },
    { id: 4, img: logo5, title: "Men striped T-shirt", title2: "T-shirt", Inventory: "32 in stock", Color: "White", Price: "$40.90", Raiting: "4.8(32 Votes)" },
    { id: 5, img: logo3, title: "Men red T-shirt", title2: "T-shirt", Inventory: "32 in stock", Color: "White", Price: "$34.90", Raiting: "4.8(32 Votes)" },
    { id: 6, img: logo2, title: "Men gray hoodie", title2: "Hoodies", Inventory: "96 in stock", Color: "Black", Price: "$49.90", Raiting: "5.0(32 Votes)" },
    { id: 7, img: logo4, title: "Women Striped T-shirt", title2: "T-shirt", Inventory: "56 in stock", Color: "White", Price: "$34.90", Raiting: "4.8(24 Votes)" },
    { id: 8, img: logo, title: "Women Striped T-shirt", title2: "T-shirt", Inventory: "32 in stock", Color: "White", Price: "$40.90", Raiting: "5.0(54 Votes)" },
    { id: 9, img: logo5, title: "Men striped T-shirt", title2: "T-shirt", Inventory: "32 in stock", Color: "White", Price: "$40.90", Raiting: "4.8(32 Votes)" },
    { id: 10, img: logo3, title: "Men red T-shirt", title2: "T-shirt", Inventory: "32 in stock", Color: "White", Price: "$34.90", Raiting: "4.8(32 Votes)" },
]

const Products = () => {
    const [showAddForm, setShowAddForm] = useState(false);

    if (showAddForm) {
        return (
            <div className="add-product-container" style={{ padding: '40px', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
                <button onClick={() => setShowAddForm(false)} style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#6c757d', marginBottom: '10px' }}>
                    ← Back
                </button>
                <h2 style={{ marginBottom: '30px' }}>Add Product</h2>
                
                <div style={{ display: 'flex', gap: '30px' }}>
                    <div style={{ flex: 2, backgroundColor: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                        <h4 style={{ marginBottom: '20px' }}>Information</h4>
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', fontSize: '12px', color: '#6c757d', marginBottom: '5px' }}>Product Name</label>
                            <input type="text" placeholder="Summer T-Shirt" style={{ width: '100%', padding: '10px', border: '1px solid #e0e0e0', borderRadius: '6px' }} />
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', fontSize: '12px', color: '#6c757d', marginBottom: '5px' }}>Product Description</label>
                            <textarea placeholder="Product description" style={{ width: '100%', padding: '10px', border: '1px solid #e0e0e0', borderRadius: '6px', height: '100px' }}></textarea>
                        </div>

                        <h4 style={{ marginBottom: '15px', marginTop: '30px' }}>Images URL</h4>
                        <div style={{ border: '2px dashed #e0e0e0', borderRadius: '8px', padding: '20px', textAlign: 'center' }}>
                            <input type="text" style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} />
                        </div>

                        <h4 style={{ marginBottom: '20px', marginTop: '30px' }}>Price</h4>
                        <div style={{ display: 'flex', gap: '20px' }}>
                            <div style={{ flex: 1 }}>
                                <label style={{ display: 'block', fontSize: '12px', color: '#6c757d', marginBottom: '5px' }}>Product Price</label>
                                <input type="text" placeholder="Enter price" style={{ width: '100%', padding: '10px', border: '1px solid #e0e0e0', borderRadius: '6px' }} />
                            </div>
                            <div style={{ flex: 1 }}>
                                <label style={{ display: 'block', fontSize: '12px', color: '#6c757d', marginBottom: '5px' }}>Discount Price</label>
                                <input type="text" placeholder="Price at Discount" style={{ width: '100%', padding: '10px', border: '1px solid #e0e0e0', borderRadius: '6px' }} />
                            </div>
                        </div>
                    </div>

                    <div style={{ flex: 1 }}>
                        <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', marginBottom: '40px' }}>
                            <h4 style={{ marginBottom: '20px' }}>Categories</h4>
                            {['Women', 'Men', 'T-Shirt', 'Hoodie', 'Dress'].map(cat => (
                                <div key={cat} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                                    <input type="checkbox" id={cat} />
                                    <label htmlFor={cat} style={{ fontSize: '14px', color: '#444' }}>{cat}</label>
                                </div>
                            ))}
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '15px' }}>
                            <button onClick={() => setShowAddForm(false)} style={{ padding: '10px 30px', border: '1px solid #e0e0e0', borderRadius: '6px', backgroundColor: 'white', color: '#007bff', cursor: 'pointer' }}>Cancel</button>
                            <button style={{ padding: '10px 35px', border: 'none', borderRadius: '6px', backgroundColor: '#2563eb', color: 'white', cursor: 'pointer' }}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="box60">
                <div className="box">
                    <h1>Products</h1>
                    <button className='Add_Button' onClick={() => setShowAddForm(true)}>+ Add Products</button>
                </div>
                <div className='Products'>
                    {Productss.map((item) => (
                        <div key={item.id} className='Products-card'>
                            <img src={item.img} alt="" />
                            <div className="box40">
                                <p>{item.title}</p>
                                <small>{item.title2}</small>
                            </div>
                            <p>{item.Inventory}</p>
                            <p>{item.Color}</p>
                            <p>{item.Price}</p>
                            <p>{item.Raiting}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Products