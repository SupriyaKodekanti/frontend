import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
 
function Home() {
    const [cartCount, setCartCount] = useState(0);
 
    const [buyCount, setBuyCount] = useState(0);
 
    const [viewCart, setViewCart] = useState([]);
 
    const [buyProduct, setBuyProducts] = useState([]);
 
    const [diffProduct, setDiffProduct] = useState({count:0,price:0})
   
    const [buyDiffProduct, setBuyDiffProduct] = useState({count:0,price:0})
 
    const navigate = useNavigate();
   
    const backgroundImageStyle = {
        backgroundImage: 'url("https://img.freepik.com/free-photo/medicine-bottle-spilling-colorful-pills-depicting-addiction-risks-generative-ai_188544-12529.jpg?t=st=1700752506~exp=1700756106~hmac=8f119af097f8046d71ce491ede7a4c03d99df3f6f1085079c8382f58c8a9917e&w=1060")',
        backgroundSize:'center',
        backgroundPosition:'center'
    }
    function AddProductsCart(productId) {
        setCartCount(cartCount + 1);
        const product = Products.find(product=> product.productId==productId);
        const index = viewCart.findIndex(view=>view.productId == product.productId)
        if(index==-1) {
            viewCart.push(product)
        }
        else{
            setDiffProduct({count:diffProduct.count+1,price:diffProduct.price+product.productPrice})
        }
    }
    function RemoveProductsCart(productId) {
        if (cartCount > 0) {
            setCartCount(cartCount - 1);
            const index = Products.findIndex(product=>product.productId==productId);
            viewCart.splice(index,1);
        }
    }
    function AddProductsBuy(productId) {
        setBuyCount(buyCount + 1);
        const product = Products.find(product=> product.productId==productId);
        const index = buyProduct.findIndex(view=>view.productId == product.productId)
        if(index==-1) {
            buyProduct.push(product)
        }
        else{
            setBuyDiffProduct({count:buyDiffProduct.count+1,price:buyDiffProduct.price+product.productPrice})
        }
        console.log(buyDiffProduct)
    }
    function RemoveProductsBuy(productId) {
        if (buyCount > 0) {
            setBuyCount(buyCount - 1);
            const index = Products.findIndex(product=>product.productId==productId);
            buyProduct.splice(index,1);
        }
    }
    function AddToCart(productId) {
        const product = Products.find(product=> product.productId==productId);
        const index = viewCart.findIndex(view=>view.productId == product.productId)
        if(index==-1) {
            viewCart.push(product)
        }
        navigate("/cart",{state:{cart:viewCart, productDetails:diffProduct}})
    }
    function BuyProducts(productId) {
        const product = Products.find(product=> product.productId==productId);
        const index = buyProduct.findIndex(view=>view.productId == product.productId)
        if(index==-1) {
            buyProduct.push(product)
        }
        navigate("/buypage",{state:{buy:buyProduct, buydiffproductdetails:buyDiffProduct}})
    }
    return (
        <div >
            <Navbar cartItemsCount={cartCount} cartItems={viewCart} buyItemsCount={buyCount} buyPage={buyProduct} cartDetails={diffProduct} buyDetails={buyDiffProduct}/>  <br />
            <div className="row bg-primary-subtle" style= {backgroundImageStyle}>
                <div className="d-flex justify-content-end"></div>
                <div className="col-md-1"></div>
                {Products.map(product=>(
                    <div className="col">
                    <img src={product.url} style={{ height: "320px", width: "300px", className:"mx-5" }}/>
                   <div className="col-10 my-1 bg-info">
                    <p style={{ textAlign: "center", marginRight: "-10px" }}>Product_Id: {product.productId}</p>
                    <p style={{ textAlign: "center", marginRight: "-10px" }}>Product_Name: {product.productName}</p>
                    <p style={{ textAlign: "center", marginRight: "-10px" }}>Manufacture_Date: {product.productManufactureDate}</p>
                    <p style={{ textAlign: "center", marginRight: "-10px" }}>Expiry_Date:{product.productExpDate}</p>
                    <p style={{ textAlign: "center", marginRight: "-10px" }}>Price:{product.productPrice}</p>
                    <p style={{ textAlign: "center", marginRight: "-10px" }}>Quantity:{product.productQuantity}</p>
                    <p style={{ textAlign: "center", marginRight: "-10px" }}>Stock:{product.productPrice}</p>
                   </div>
                   
                    <div class="btn-group" role="group">
                        <button type="button" className="btn btn-danger rounded-circle" onClick={()=>{RemoveProductsCart(product.productId)}}>-</button>
                        <button type="button" className="btn btn-primary mx-1" onClick={()=>{AddToCart(product.productId)}}>Add Cart</button>
                        <button type="button" className="btn btn-success rounded-circle" onClick={()=>{AddProductsCart(product.productId)}}>+</button>
                    </div><br></br>
 
                    <div className="btn-group my-1" role="group">
                        <button type="button" class="btn btn-danger rounded-circle" onClick={()=>{RemoveProductsBuy(product.productId)}}>-</button>
                        <button type="button" class="btn btn-primary mx-1" onClick={()=>{BuyProducts(product.productId)}}>Buy</button>
                        <button type="button" class="btn btn-success rounded-circle" onClick={()=>{AddProductsBuy(product.productId)}}>+</button>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}
export default Home
 
 
export const Products = [{
    productId:"1",
    productName:"ASprin",
    productManufactureDate : "10/20/2023",
    productExpDate: "10/22/2024",
    productPrice: 20.00,
    productQuantity:2,
    productStock:234,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVPAAFFikS6WZtum9dhWXhzUGnhCOh5bMb1g&usqp=CAU"
},
{
    productId:"2",
    productName:"Crocin",
    productManufactureDate : "11/20/2023",
    productExpDate: "10/22/2024",
    productPrice: 48.00,
    productQuantity:3,
    productStock:234,
    url: "data:image/jpeg;base64,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"
},
{
    productId:"3",
    productName:"Citrezene",
    productManufactureDate : "11/20/2023",
    productExpDate: "10/22/2025",
    productPrice: 10.00,
    productQuantity:2,
    productStock:234,
    url: "https://5.imimg.com/data5/SELLER/Default/2023/10/351102304/EQ/UR/CZ/107248383/cetirizine-hydrochloride-tablets.jpeg"
}]