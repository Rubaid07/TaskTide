import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
    const navigate = useNavigate()
    const { signIn } = useContext(AuthContext)
    const { signInWithGoogle } = useContext(AuthContext)
    const [error, setError] = useState("")
    const location = useLocation()

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                toast.success("Logged in successfully")
                navigate(`${location.state ? location.state : "/"}`)
            })
            .catch(error => {
                const errorCode = error.code
                setError(errorCode)
            })
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                toast.success("Logged in successfully")
                navigate(`${location.state ? location.state : "/"}`)
            })
            .catch(error => {
                toast.error(error.message)
            })
    }
    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-286px)]">
            <div className="card border border-base-300 bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-xl">
                <h1 className='text-center font-bold text-2xl mt-4'>Login your account</h1>
                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset">
                        {/* email */}
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" required />
                        {/* password */}
                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" required />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        {error && <p className='text-red-400 text-xs'>{error}</p>}

                        <button type='submit' className="btn btn-info text-white mt-4">Login</button>
                        <button onClick={handleGoogleSignIn} className="btn bg-white text-black mt-2">
                            <svg aria-label="Google logo" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>
                        <p className='text-center'>Don't have an account? <Link className='text-info underline' to="/register">Register</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;