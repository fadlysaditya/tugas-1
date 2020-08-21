import React from "react";
import { NotFound } from "../Pages/Index"
import { useLocation } from "react-router-dom";

function Pdp() {
    let query = new URLSearchParams(useLocation().search);
    let isQueryExist = query && query.get("title");
    return (
        <div className="wrapper">
            {!isQueryExist && (
                <NotFound />
            )}
            {isQueryExist && (
                <Detail />
            )}
        </div>
    )
}

function Detail() {
    let query = new URLSearchParams(useLocation().search);
    return (
        <>
            <div className="section-pdp">
                <img src="https://dummyimage.com/400x400/2c9e7e/f50000.png&text=Items+Dummy" />
                <div className="product-info">
                    <h1 className="title">{query.get("title").replace("+", " ")}</h1>
                    <p class="price-2">Rp. 100.000</p>
                    <div className="desc">
                        suatu percobaan yang Mantab XD suatu percobaan yang Mantab XD suatu percobaan yang Mantab XD suatu percobaan yang Mantab XD suatu percobaan yang Mantab XD suatu percobaan yang Mantab XD suatu percobaan yang Mantab XD suatu percobaan yang Mantab XD suatu percobaan yang Mantab XD 
                    </div>
                    <div class="actions">
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <button>Add To Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pdp;