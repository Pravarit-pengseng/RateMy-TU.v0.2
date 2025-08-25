import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { handleError, handleSuccess } from "../utils"
import { Link, useNavigate } from 'react-router-dom'

function Signup() {
    const [signupInfo, setSignupInfo] = useState({
        name: "",
        email: "",
        password: ""
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        const copysignupInfo = { ...signupInfo }
        copysignupInfo[name] = value
        setSignupInfo(copysignupInfo)
        console.log("Login Info", signupInfo)

    }

    const handleSignup = async (e) => {
        e.preventDefault()

        const { name, email, password } = signupInfo
        if (!name || !email || !password) {
            return handleError("Please fill all the fields")
        }

        try {
            const url = "http://localhost:8080/auth/signup"
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(signupInfo),
            })
            const data = await response.json()
            if (data.success) {
                handleSuccess(data.message)
                setTimeout(() =>
                    navigate("/login"), 1000)
            } else {
                handleError(data.message || "Signup failed")
            }
        } catch (err) {
            // console.error(err)
            handleError(err.message || "Something went wrong")
        }
    }

    const [showpassword, setShowpassword] = useState(false)

    const togglePasswordVisibility = () => {
        setShowpassword(!showpassword)
    }

    return (
        <>
            {/* BODY */}
            <div className='d-flex justify-content-center align-items-center vh-100 modern-bg'>
                {/* Container */}
                <div class="flex h-[550px] w-4xl rounded-[15px] overflow-hidden modern-glass">
                    <div class="flex-1 overflow-hidden rounded-[15px] w-2/5">
                        <img class="w-full h-full object-cover" src='./src/assets/Register_IMG.png' />
                    </div>
                    <div className='border-0 shadow p-5 text-white w-3/5' style={{ maxWidth: "420px" }}>
                        <h2 className="text-center mb-4 fw-blod">Register</h2>

                        <form className='signup-wrapper' onSubmit={handleSignup}>
                            <div className='mb-4'>
                                <label htmlFor='name' className='form-label text-white'>Name</label>
                                <input
                                    onChange={handleChange}
                                    type='text'
                                    name='name'
                                    className='form-control form-control-lg bg-transparent text-white border-white'
                                    placeholder='Enter your Name'
                                    value={signupInfo.name}
                                />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor='name' className='form-label text-white'>Email</label>
                                <input
                                    onChange={handleChange}
                                    type='email'
                                    name='email'
                                    className='form-control form-control-lg bg-transparent text-white border-white'
                                    placeholder='Enter your Email'
                                    value={signupInfo.email}
                                />
                            </div>
                            <div className='mb-4 position-relative'>
                                <label htmlFor='name' className='form-label text-white'>Password</label>
                                <input
                                    onChange={handleChange}
                                    type={showpassword ? "text" : "password"}
                                    name='password'
                                    className='form-control form-control-lg bg-transparent text-white border-white'
                                    placeholder='Enter Password'
                                    value={signupInfo.password}
                                />
                                <i
                                    className={`bi ${showpassword ? "bi-eye-slash" : "bi-eye"}`}
                                    onClick={togglePasswordVisibility}
                                    style={{
                                        position: "absolute",
                                        right: "15px",
                                        top: "50%",
                                        cursor: "pointer",
                                        color: "white",
                                        fontSize: "1.2rem"
                                    }}
                                ></i>
                            </div>
                            <button type='submit' className='btn btn-light w-100 py-2 fw-semiibold'>Register</button>
                        </form>

                        <div className="text-center mt-4">
                            <span className='text-white-50'>Already have an Account? <Link to="/login" className='text-white fw-semibold'>Login</Link></span>
                        </div>

                    </div>
                    
                </div>

            </div>
            <ToastContainer />
        </>
    )
}

export default Signup