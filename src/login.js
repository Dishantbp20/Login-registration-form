import React, { useState } from "react";
import "./practice.css"

function Login() {
    const[login,setLogin]=useState()
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    const handleLogin=()=>{
        console.log(login)
       let Email= localStorage.getItem('email')
       let PassWord=localStorage.getItem('password')
       if(email===Email && password===PassWord){
        alert('Email is vaild')
       }else{

        alert('Email is invalid')
       }
       
       
    const changeEmail=(e)=>{
        setEmail(e.target.value);
        console.log(e.log.value)
    }
    const changePassword = (e) => {
        setPassword(e.target.value);
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
                        <button className="button-17 " role="button">LOGIN</button>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="card shadow-2-strong card-registration mycard" >
                    <div className="card-body p-4 p-md-5">
                        <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Login Form</h3>
                        <form className="main">


                            <div className="row">
                                <div className="col-md-12 mb-4 pb-2">

                                    <div className="form-outline">
                                        <label className="form-label" for="emailAddress">Email</label>
                                        <input type="email" id="emailAddress" className="form-control form-control-lg" placeholder="Enter email" onChange={(e)=>changeEmail(e)} />
                                    </div>

                                </div>
                                <div className="col-md-12 mb-4 pb-2">

                                    <div className="form-outline">
                                        <label className="form-label" for="PassWord" >Password</label>
                                        <input type="password" id="PassWord" placeholder="enter vaild password" className="form-control form-control-lg" onChange={(e)=>changePassword(e)}/>

                                    </div>

                                </div>
                                <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                </div>

                            </div>



                            <div className="mt-4 pt-2 ">
                                <button class="button-27 " role="button" onClick={()=>handleLogin()}>Login</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Login