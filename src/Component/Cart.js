import React from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
 
function Cart() {
    const location = useLocation();
    let cartItems = [];
    let cartDetails = {};
    let cost = 0;
    console.log(location.state && location.state?.productDetails)
    if (location.state?.cart && location.state?.productDetails) {
        cartItems = location.state.cart
        cartDetails = location.state.productDetails
        cost = cost + cartDetails.price
    }
 
    const [selectedProducts, setSelectedProducts] = useState(cartItems.length);
    // const [itemsCost, setItemsCount] = useState(0)
    // console.log(cartItems[0].url)
    const navigate = useNavigate();
 
    if (Object.keys(cartItems).length > 0) {
        for (let items of cartItems) {
            cost = cost + items.productPrice
        }
    }
    console.log(cartDetails)
 
   
 
    function ProceedtoPay() {
        navigate("/PersonalInfo")
    }
 
    const backgroundImageStyle = {
        backgroundImage: 'url("https://img.freepik.com/premium-photo/top-view-health-still-life-assortment-with-copy-space_23-2148854079.jpg?w=900")',
        backgroundSize: 'center',
        backgroundPosition: 'center',
        height:'600px'
    }
 
    return (
        <div>
            <Navbar />
            <div style ={backgroundImageStyle} >
            <h4 style={{ fontSize: "20px", color: "purple",textAlign:"center" }}>Cart Items</h4><br />
            {
                Object.keys(cartItems).length > 0 &&
                cartItems.map(items => (
                    <>
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-3 mx-4 my-4" style={{color:"Blue"}}> Product</div>
                            <div className="col-md-3 mx-4 my-4" style={{color:"Blue"}}>Product id </div>
                            <div className="col-md-3 mx-4 my-4" style={{color:"Blue"}}>Product Price</div>
                        </div>
                        <div className="row">
                            <div className="col-md-1 "></div>
                            <div className="col-md-3 mx-4 my-4">
                                <img src={items.url} style={{ height: "300px", width: "280px" }} />
                            </div>
                            <div className="col-md-3 mx-6 my-4">
                                {/* <button type="button" className="btn btn-danger rounded-circle" onClick={()=>{RemoveSelectedProducts(items.productId)}}>-</button>
                            // { <div> product quantity is {items.productQuantity} </div>}
                            <button type="button" className="btn btn-success rounded-circle" onClick={()=>{AddSelectedProducts(items.productId)}}>+</button> */}
                                <div> Product Id is {items.productId} </div>
                            </div>
                            <div className="col-md-3 mx-4 my-4">
                                {items.productPrice}
                            </div>
                        </div>
                    </>
 
                ))
            }
           
            {cost > 0 && (
                <div className="row">
                    <div className="col-md-6"></div>
                    <div className="col-md-6" >
                        <h1 style={{color:"Blue"}}> total cost is {cost} </h1>
                    </div>
                    <div className="row">
                        <div className="col-md-6"></div>
                        <div className="col-md-6">
                            <button type="button" className="btn btn-primary" onClick={ProceedtoPay}>Proceed to Pay</button>
                        </div>
                    </div>
                </div>
            )}
            </div>
        </div>
    )
}
export default Cart