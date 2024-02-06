import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import Navbar3 from "./Navbar3";
import "./VendorsList.css";
function VendorList(){
    const[list, setlist]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8080/getvendor").then((result)=>{
            console.log(result.data);
            setlist(result.data);
        })
        .catch((error)=> console.log(error));
    },[]);

    return(

        <div>
            <div>
                <Navbar3/>
            </div>
            <div id="bgimg"className="bg-gray-100 p-60 rounded-md shadow-md">
            <table className="Vendor-table">
                <thead>
                    <tr>
                        <td><b>UserId</b></td>
                        <td><b>FirstName</b></td>
                        <td><b>LastName</b></td>
                        <td><b>Email</b></td>
                        <td><b>LicenseNo</b></td>
                        <td><b>Certificate</b></td>
                        <td><b>PhoneNo</b></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map(
                            data=>
                            <tr key={data.user_Id}>
                                <td>{data.user_Id}</td>
                                <td>{data.fname}</td>
                                <td>{data.lname}</td>
                                <td>{data.email}</td>
                                <td>{data.license}</td>
                                <td>{data.certificate}</td>
                                <td>{data.phnno}</td>
                                

                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
        </div>
    );
}
export default VendorList;