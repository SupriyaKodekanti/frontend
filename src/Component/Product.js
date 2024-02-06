import React from "react";
import Navbaradmin from "./Navbaradmin";
import { useState,useEffect } from "react";
import axios from "axios";
function Product() {
  const[list, setlist]=useState([]);
  useEffect(()=>{
      axios.get("http://localhost:8080/display").then((result)=>{
          console.log(result.data);
          setlist(result.data);
      })
      .catch((error)=> console.log(error));
  },[]);

  return(

      <div>
          <div>
              <Navbaradmin/>
          </div>
          <div id="bgimg"className="bg-gray-100 p-60 rounded-md shadow-md">
          <table className="Vendor-table">
              <thead>
                  <tr>
                      <td><b>ProductrId</b></td>
                      <td><b>ProductName</b></td>
                      <td><b>ManfactureDate</b></td>
                      <td><b>ExpiryDate</b></td>
                      <td><b>Price</b></td>
                      <td><b>Quantity</b></td>
                      <td><b>Stock</b></td>
                  </tr>
              </thead>
              <tbody>
                  {
                      list.map(
                          data=>
                          <tr key={data.productid}>
                              <td>{data.productid}</td>
                              <td>{data.pname}</td>
                              <td>{data.manufacturedate}</td>
                              <td>{data.expirydate}</td>
                              <td>{data.price}</td>
                              <td>{data.quantity}</td>
                              <td>{data.stock}</td>
                              

                          </tr>
                      )
                  }
              </tbody>
          </table>
      </div>
      </div>
  );
  }
 
  export default Product;