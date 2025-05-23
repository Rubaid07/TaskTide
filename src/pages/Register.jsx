import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {
    const { signInWithGoogle } = useContext(AuthContext)
    const { createUser, setUser, updateUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const [passwordError, setPasswordError] = useState("")
    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const photo = form.photo.value
        if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters")
            return
        }
        if (!/[A-Z]/.test(password)) {
            setPasswordError("Password must contain at least one uppercase letter")
            return
        }
        if (!/[a-z]/.test(password)) {
            setPasswordError("Password must contain at least one lowercase letter")
            return
        }
        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateUser({ displayName: name, photoURL: photo }).then(() => {
                    setUser({ ...user, displayName: name, photoURL: photo })
                    toast.success("Sign in successfully")
                    navigate("/")
                }).catch(error => {
                    toast.error(error.message)
                    setUser(user)
                })
                setUser(user)
            })
            .catch(error => {
                const errorMessage = error.message
                toast.error(errorMessage)
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                toast.success("Sign in successfully")
                navigate("/")
            })
            .catch(error => {
                toast.error(error.message)
            })
    }
    return (
        <div className="flex items-center my-10 justify-center ">
            <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-xl">
                <h1 className='text-center font-bold text-2xl mt-4'>Register</h1>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">
                        {/* name */}
                        <label className="label">Name</label>
                        <input name='name' type="text" className="input" placeholder="Name" required />
                        {/* email */}
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" required />
                        {/* password */}
                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" required />
                        {/* photo */}
                        <label className="label">Photo URL</label>
                        <input name='photo' type="text" className="input" placeholder="Photo URL" required />
                        {passwordError && <p className='text-red-400 text-xs'>{passwordError}</p>}

                        <button type='submit' className="btn bg-sky-400 text-white hover:bg-sky-500 mt-4">Register</button>
                        <button onClick={handleGoogleSignIn} className="btn bg-white mt-2 text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Sign Up with Google
                        </button>
                        <p className='text-center'>Already have an account? <Link className='text-sky-500 underline' to="/login">Login</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;