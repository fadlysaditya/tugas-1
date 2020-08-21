import React from 'react';
import CategoryHome from '../Component/CategoryHome'



function Homepage() {
    return (
        <>
            <div style={{height: 45}} />
            <div className="section-banner">
                <img src="https://dummyimage.com/1280x300/2c9e7e/f50000.png&text=Dummy+Banner" />
            </div>


            <div className="wrapper">
                <CategoryHome id="1" />
                <br/><br/>
                <CategoryHome id="2" />
            </div>
        </>
    )
}

export default Homepage;