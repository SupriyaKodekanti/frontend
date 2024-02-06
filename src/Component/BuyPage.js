import React from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
 
 
function BuyPage() {
    const location = useLocation();
    let buyItems = [];
    let buyDiffProduct = {};
    let totalCost = 0;
    console.log(location.state)
    if (location.state?.buy && location.state?.buydiffproductdetails) {
        buyItems = location.state.buy
        buyDiffProduct = location.state.buydiffproductdetails
        totalCost = totalCost + buyDiffProduct.price
    }
    if (Object.keys(buyItems).length > 0) {
        for (let items of buyItems) {
            totalCost = totalCost + items.productPrice;
        }
    }
 
    const backgroundImageStyle = {
        backgroundImage: 'url("https://img.freepik.com/free-photo/medicine-bottle-spilling-colorful-pills-depicting-addiction-risks-generative-ai_188544-12529.jpg?t=st=1700752506~exp=1700756106~hmac=8f119af097f8046d71ce491ede7a4c03d99df3f6f1085079c8382f58c8a9917e&w=1060")',
        backgroundSize: 'center',
        backgroundPosition: 'center',
        height: '600px'
    }
 
    return (
        <div>
            <Navbar />
            <div style={backgroundImageStyle}>
                {
                    Object.keys(buyItems).length > 0 &&
                    buyItems.map(items => (
                        <>
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-3 mx-4 my-4" style={{ color: "Blue" }}> Product</div>
                            <div className="col-md-3 mx-4 my-4" style={{ color: "Blue" }}>Product id </div>
                            <div className="col-md-3 mx-4 my-4" style={{ color: "Blue" }}>Product Price</div>
                        </div>
                        <div>
                            <div className="row">
                                <div className="col-md-1"></div>
                                <div className="col-md-3 mx-4 my-4">
                                    <img src={items.url} style={{ height: "320px", width: "300px" }} />
                                </div>
                                <div className="col-md-3 mx-4 my-4">
                                    {items.productQuantity}
                                </div>
                                <div className="col-md-3 mx-4 my-4">
                                    {items.productPrice}
                                </div>
                            </div>
                        </div></>
                    ))
                }
                {totalCost > 0 && (
                    <div>
                        <div style={{ color: "purple" }}> Total Cost is {totalCost} </div>
                    </div>
                )}
            </div>
        </div>
    )
}
 
export default BuyPage