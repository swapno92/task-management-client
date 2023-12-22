// import React from 'react';

import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../Providers/AuthProvider";


const Register = () => {
    const { signInWithGoogle } = useContext(AuthContext)
    const { createUser } = useContext(AuthContext)
    // console.log(authInfo);
    const navigate = useNavigate()

    const [error, setError] = useState('')

    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const imageUrl = e.target.image.value
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password, imageUrl);
        setError('')


        const passError = /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/;

        if (!passError.test(password)) {
            setError("password must be 6 character,one uppercase, one lowercase and one special character");
            return;
        }
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                swal("Good job!", "Registration Success", "success");
                updateProfile(result.user, { displayName: name, photoURL: imageUrl })
                navigate('/dashboard/home')
            })
            .catch(error => {
                console.error(error)
            })
    }
    const handleWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                navigate('/dashboard/home')

            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className="h-full pb-5 border border-gray-300 rounded-lg lg:w-1/2 lg:mx-auto mx-6 lg:px-0 px-10">
            < div className="pb-8 mx-4 lg:mx-auto   lg:px-0 md:px-10 flex flex-col items-center " data-aos="flip-left">
            <h2 className="text-3xl my-7 text-center font-bold font-serif" data-aos="fade-down fontbo">This is Register</h2>
            < form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto" data-aos="fade-down">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold text-md">Name</span>
                    </label>
                    <input type="text" required name="name" placeholder="Name" className="input input-bordered" />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold text-md">Image</span>
                    </label>
                    <input type="text" name="image" placeholder="image" className="input input-bordered" />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold text-md">Email</span>
                    </label>
                    <input type="email" required name="email" placeholder="Email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold text-md">Password</span>
                    </label>
                    <input type="password" required name="password" placeholder="Password" className="input input-bordered" />
                </div>
                <p className="text-red-600">{error}</p>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
                <p className="text-center mt-4">Already Have an account<Link className="text-blue-600 font-bold" to='/login'> Login</Link></p>
            </form >
                <button onClick={handleWithGoogle} className=" bg-slate-300 px-16 py-2 rounded-lg border border-lime-600 mt-6 flex items-center gap-2" ><FcGoogle className="text-2xl"></FcGoogle>Sign in with google</button>
        </div >
        </div>
    );
};

export default Register;