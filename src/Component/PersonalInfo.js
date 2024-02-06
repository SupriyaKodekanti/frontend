import { Home } from "@mui/icons-material";
import React from "react";
import { useState } from "react";


function PersonalInfo() {
    const [state, setState] = useState({
        Name: "",
        accoutid: "",
        cvv: "",
        date: ""
    })
    function HandleInputChange(e) {
        const name = e.target.name
        const value = e.target.value
        setState({
            ...state,
            [name]: value
        })
    }
    const backgroundImageStyle = {

        backgroundImage: 'url("https://img.freepik.com/free-photo/copy-space-medical-desk-with-stethoscope_23-2148519746.jpg?w=900&t=st=1700761871~exp=1700762471~hmac=01ddd5fec532dbb17c44a40b90d8e296e53ec7518173f1272d469a552eceaf0c")',
        backgroundRepeat: 'norepeat',
        height: '600px'
    }
    return (

        <form style={backgroundImageStyle}>
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-4">

                    <center><b> Payment Information </b></center>
                    <label for="name"> Name </label>
                    <input name="name" type="text" className="form-control" id="name" value={state.name} onChange={HandleInputChange} />
                    <label for="dno"> AccountId </label>
                    <input name="dno" type="text" className="form-control" id="dno" value={state.accoutid} onChange={HandleInputChange} />
                    <label for="street"> CVV </label>
                    <input name="street" type="password" className="form-control" id="street" value={state.cvv} onChange={HandleInputChange} />
                    <label for="landMark"> Expiry Month</label>
                    <input name="landMark" type="Date" className="form-control" id="landMark" value={state.date} onChange={HandleInputChange} /><br />
                    <button
                        type="submit" style={{ width: '95px' }}
                        className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </form>
    )

}
export default PersonalInfo