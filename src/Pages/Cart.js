import React from "react";
import '../index.css';

function Cart() {
    return (
        <div className="wrapper">
            <h1 className="title">Cart</h1>
            <table className="table-cart">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="https://dummyimage.com/80x80/2c9e7e/f50000.png&text=Items+Dummy" /></td>
                        <td>Item 1</td>
                        <td>4 Pcs</td>
                        <td>Rp. 100.000</td>
                        <td>Rp. 400.000</td>
                    </tr>
                    <tr>
                        <td><img src="https://dummyimage.com/80x80/2c9e7e/f50000.png&text=Items+Dummy" /></td>
                        <td>Item 2</td>
                        <td>2 Pcs</td>
                        <td>Rp. 100.000</td>
                        <td>Rp. 200.000</td>
                    </tr>
                    <tr>
                        <td><img src="https://dummyimage.com/80x80/2c9e7e/f50000.png&text=Items+Dummy" /></td>
                        <td>Item a</td>
                        <td>1 Pcs</td>
                        <td>Rp. 100.000</td>
                        <td>Rp. 100.000</td>
                    </tr>
                </tbody>
            </table>
            <div className="center">
                <a className="checkout" href="#">Checkout</a>
            </div>
        </div>
    )
}

export default Cart;