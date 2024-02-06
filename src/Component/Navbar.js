import React from "react";
import { NavLink } from "react-router-dom";
function Navbar(props) {
let cartCount = props?.cartItemsCount
let cartItems = props?.cartItems
let buyItemsCount = props?.buyItemsCount
let buyProducts = props?.buyPage
let cartDetails = props?.cartDetails
let buyDetails = props?.buyDetails
 
    return (
        <nav class="flex px-4 border-b md:shadow-lg items-center relative">
            <div class="text-lg font-bold md:py-0 py-4">
                Pharma
            </div>
            <ul class="md:px-2 ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-0">
                <NavLink to={"/home"}>
                    <li>
                        <a href="#" class="flex md:inline-flex p-4 items-center hover:bg-gray-50">
                            <span>Home</span>
                        </a>
                    </li>
                </NavLink>
                <NavLink to={"/Buypage"} state={{buy:buyProducts,buydiffproductdetails:buyDetails}}>
                    <li>
                        <a href="#" class="flex md:inline-flex p-4 items-center hover:bg-gray-50">
                            <span>Buy{buyItemsCount>0 && buyItemsCount}</span>
                        </a>
                    </li>
                </NavLink>
               
                
                <NavLink to={"/Cart"} state={{cart:cartItems,productDetails:cartDetails}}>
                    <li>
                        <a href="#" class="flex md:inline-flex p-4 items-center hover:bg-gray-50">
                            <span>Cart{cartCount >0 && cartCount}</span>
                        </a>
                    </li>
                </NavLink>
               
                <NavLink to={"/Account"}>
                    <li>
                        <a href="#" class="flex md:inline-flex p-4 items-center hover:bg-gray-50">
                            <span>Account</span>
                        </a>
                    </li>
                </NavLink>
            </ul>
        </nav>
    );
}
 
export default Navbar;