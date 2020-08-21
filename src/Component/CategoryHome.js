import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const newarrival = [
    {
        "id": 1,
        "name": "Item 1",
        "price": "Rp. 100.000",
        "img": "https://dummyimage.com/200x200/2c9e7e/f50000.png&text=Items+Dummy"
    },
    {
        "id": 2,
        "name": "Item 2",
        "price": "Rp. 100.000",
        "img": "https://dummyimage.com/200x200/2c9e7e/f50000.png&text=Items+Dummy"
    },
    {
        "id": 3,
        "name": "Item 3",
        "price": "Rp. 100.000",
        "img": "https://dummyimage.com/200x200/2c9e7e/f50000.png&text=Items+Dummy"
    },
    {
        "id": 4,
        "name": "Item 4",
        "price": "Rp. 100.000",
        "img": "https://dummyimage.com/200x200/2c9e7e/f50000.png&text=Items+Dummy"
    }
]

const bestseller = [
    {
        "id": 1,
        "name": "Item A",
        "price": "Rp. 100.000",
        "img": "https://dummyimage.com/200x200/2c9e7e/f50000.png&text=Items+Dummy"
    },
    {
        "id": 2,
        "name": "Item B",
        "price": "Rp. 100.000",
        "img": "https://dummyimage.com/200x200/2c9e7e/f50000.png&text=Items+Dummy"
    },
    {
        "id": 3,
        "name": "Item C",
        "price": "Rp. 100.000",
        "img": "https://dummyimage.com/200x200/2c9e7e/f50000.png&text=Items+Dummy"
    },
    {
        "id": 3,
        "name": "Item D",
        "price": "Rp. 100.000",
        "img": "https://dummyimage.com/200x200/2c9e7e/f50000.png&text=Items+Dummy"
    }
]

function CategoryHome(props) {
    if (props.id == 1) {
        return (
            <>
                <h2>New Arrivals</h2>
                <div className="section-category">
                    {newarrival.map((category, index) => (
                        <div key={index} className="product-item">
                            <img src={category.img} />
                            <div className="item-info">
                                <p>{category.name}</p>
                                <p className="price">{category.price}</p>
                                <Link to={`category/1`}>View More</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        )
    } else if (props.id == 2) {
        return (
            <>
                <h2>Best Seller</h2>
                <div className="section-category">
                    {bestseller.map((category, index) => (
                        <div key={index} className="product-item">
                            <img src={category.img} />
                            <div className="item-info">
                                <p>{category.name}</p>
                                <p className="price">{category.price}</p>
                                <Link to={`category/2`}>View More</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        )
    }

}

export default CategoryHome;