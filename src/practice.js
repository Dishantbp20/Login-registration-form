import React, { useState } from "react";
import "./practice.css"

function Practice(props) {
    console.log(props)
    const handleLogin = () => {
        console.log('Login')
        props.isLogin()
        
        
    }
    const[register,setRegister]=useState();
    const handleRegister=()=>{
        // setRegister("clicked")
        localStorage.setItem('email',email)
        localStorage.setItem('password',password)

    }

    const [fname, setFname] = useState();
    const changeFname = (e) => {
        setFname(e.target.value);
        console.log(e.target.value)
    }
    const [lname, setLname] = useState();
    const changeLname = (e) => {
        setLname(e.target.value);
        console.log(e.target.value)
    }
    const [email, setEmail] = useState();
    const changeEmail = (e) => {
        setEmail(e.target.value);
        console.log(e.target.value)
    }
    const [password, setPassword] = useState();
    const changePassword = (e) => {
        setPassword(e.target.value);
        console.log(e.target.value)
    }
    
    const [course, setCourse] = useState();
    const changeCourse = (e) => {
        setCourse(e.target.value)
        console.log(e.target.value)
    }
    const [address, setAddress] = useState()
    const changeAdd = (e) => {
        setAddress(e.target.value)
        console.log(e.target.value)
    }
    
    return (
        <>
            <div className="text-center btt " >
                <div className="row">
                    <div className="col-md-6">
                        <button className="button-17 " role="button">REGISTRATION</button>
                    </div>
                    <div className="col-md-6">
                        <button className="button-17 " role="button" onClick={() => handleLogin()}>LOGIN</button>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="card shadow-2-strong card-registration" >
                    <div className="card-body p-4 p-md-5">
                        <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                        <form className="main">

                            <div className="row">
                                <div className="col-md-6 mb-4">

                                    <div className="form-outline">
                                        <label className="form-label" for="firstName">First Name</label>
                                        <input type="text" id="firstName" className="form-control form-control-lg" onChange={(e)=>changeFname(e)} />

                                    </div>

                                </div>
                                <div className="col-md-6 mb-4">

                                    <div className="form-outline">
                                        <label className="form-label" for="lastName">Last Name</label>
                                        <input type="text" id="lastName" className="form-control form-control-lg" onChange={(e)=>changeFname(e)} />
                                    </div>

                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-4 d-flex align-items-center">

                                    <div className="form-outline datepicker w-100">
                                        <label for="birthdayDate" className="form-label">Birthday</label>
                                        <input type="date" className="form-control form-control-lg" id="birthdayDate" />

                                    </div>

                                </div>
                                <div className="col-md-6 mb-4">

                                    <h6 className="mb-2 pb-1">Gender: </h6>

                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                                            value="option1" checked />
                                        <label className="form-check-label" for="femaleGender">Female</label>
                                    </div>

                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                                            value="option2" />
                                        <label className="form-check-label" for="maleGender">Male</label>
                                    </div>

                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                                            value="option3" />
                                        <label className="form-check-label" for="otherGender">Other</label>
                                    </div>

                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-4 pb-2">

                                    <div className="form-outline">
                                        <label className="form-label" for="emailAddress">Email</label>
                                        <input type="email" id="emailAddress" className="form-control form-control-lg" onChange={(e)=>changeEmail(e)} />

                                    </div>

                                </div>
                                <div className="col-md-6 mb-4 pb-2">

                                    <div className="form-outline">
                                        <label className="form-label" for="passwd">Password</label>
                                        <input type="password" id="passwd" className="form-control form-control-lg" onChange={(e)=>changePassword(e)}/>

                                    </div>

                                </div>
                            </div>
                            <div className="col-md-6 mb-4 pb-2">

                                    <div className="form-outline">
                                        <label className="form-label" for="phoneNumber">Phone Number</label>
                                        <input type="tel" id="phoneNumber" className="form-control form-control-lg" />

                                    </div>

                            </div>
                           

                            <div className="row">
                                <div className="col-12">
                                    <label className="form-label select-label">Course</label><br />
                                    <select className="select form-control-lg">
                                        <option value="1">ReactJs</option>
                                        <option value="2">Java Springboot</option>
                                        <option value="3">Angular</option>
                                        <option value="4">Python</option>
                                    </select>


                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-12">
                                    <label for="address">Address</label>
                                    <textarea className="form-control" id="address" rows="3"></textarea>
                                </div>
                            </div>

                            <div className="mt-4 pt-2 ">
                                <button class="button-27 " role="button" onClick={()=>handleRegister()}>Register</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>




        </>
    )
}
export default Practice