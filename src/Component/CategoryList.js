import React from 'react';
import { Link } from 'react-router-dom';
import { NotFound } from '../Pages/Index';
import '../index.css';

const newarrival = [
    {
        "id": 1,
        "name": "Product Dummy 1",
        "price": "Rp. 100.000",
        "img": "https://dummyimage.com/200x200/2c9e7e/f50000.png&text=Items+Dummy"
    },
    {
        "id": 2,
        "name": "Product Dummy 2",
        "price": "Rp. 100.000",
        "img": "https://dummyimage.com/200x200/2c9e7e/f50000.png&text=Items+Dummy"
    },
    {
        "id": 3,
        "name": "Product Dummy 3",
        "price": "Rp. 100.000",
        "img": "https://dummyimage.com/200x200/2c9e7e/f50000.png&text=Items+Dummy"
    },
    {
        "id": 4,
        "name": "Product Dummy 4",
        "price": "Rp. 100.000",
        "img": "https://dummyimage.com/200x200/2c9e7e/f50000.png&text=Items+Dummy"
    },
    {
        "id": 5,
        "name": "Product Dummy 5",
        "price": "Rp. 100.000",
        "img": "https://dummyimage.com/200x200/2c9e7e/f50000.png&text=Items+Dummy"
    },
    {
        "id": 6,
        "name": "Product Dummy 6",
        "price": "Rp. 100.000",
        "img": "https://dummyimage.com/200x200/2c9e7e/f50000.png&text=Items+Dummy"
    }

]

const bestseller = [
    {
        "id": 1,
        "name": "Product Dummy 1",
        "price": "Rp. 100.000",
        "img": "https://dummyimage.com/200x200/2c9e7e/f50000.png&text=Items+Dummy"
    },
    {
        "id": 2,
        "name": "Product Dummy 2",
        "price": "Rp. 100.000",
        "img": "https://dummyimage.com/200x200/2c9e7e/f50000.png&text=Items+Dummy"
    },
    {
        "id": 3,
        "name": "Product Dummy 3",
        "price": "Rp. 100.000",
        "img": "https://dummyimage.com/200x200/2c9e7e/f50000.png&text=Items+Dummy"
    },
    {
        "id": 4,
        "name": "Product Dummy 4",
        "price": "Rp. 100.000",
        "img": "https://dummyimage.com/200x200/2c9e7e/f50000.png&text=Items+Dummy"
    },
    {
        "id": 5,
        "name": "Product Dummy 5",
        "price": "Rp. 100.000",
        "img": "https://dummyimage.com/200x200/2c9e7e/f50000.png&text=Items+Dummy"
    },
    {
        "id": 6,
        "name": "Product Dummy 6",
        "price": "Rp. 100.000",
        "img": "https://dummyimage.com/200x200/2c9e7e/f50000.png&text=Items+Dummy"
    }
    ,
    {
        "id": 7,
        "name": "Product Dummy 6",
        "price": "Rp. 100.000",
        "img": "https://dummyimage.com/200x200/2c9e7e/f50000.png&text=Items+Dummy"
    }
    ,
    {
        "id": 8,
        "name": "Product Dummy 6",
        "price": "Rp. 100.000",
        "img": "https://dummyimage.com/200x200/2c9e7e/f50000.png&text=Items+Dummy"
    }
]

function CategoryList(props) {
    if (props.id == 1) {
        return (
            <>
                <h2 className="title">New Arrivals # {props.id}</h2>
                <div className="section-category">
                    {newarrival.map((item, index) => (
                        <div key={index} className="product-item">
                            <img src={item.img} />
                            <div className="item-info">
                                <p>{item.name}</p>
                                <p className="price">{item.price}</p>
                                <Link to={`/product?title=${encodeURIComponent(item.name).replace(/%20/g, '+')}`}>Detail</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        )
    } else if (props.id == 2) {
        return (
            <>
                <h2 className="title">Best Seller # {props.id}</h2>
                <div className="section-category">
                    {bestseller.map((item, index) => (
                        <div key={index} className="product-item">
                            <img src={item.img} />
                            <div className="item-info">
                                <p>{item.name}</p>
                                <p className="price">{item.price}</p>
                                <Link to={`/product?title=${encodeURIComponent(item.name).replace(/%20/g, '+')}`}>Detail</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        )
    } else {
        return <NotFound />
    }

}

export default CategoryList;