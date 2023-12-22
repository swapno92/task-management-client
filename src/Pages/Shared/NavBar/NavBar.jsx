import {  NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useContext } from "react";

const NavBar = () => {
    const { user ,logOut} = useContext(AuthContext);
    const navigate = useNavigate()

    const handleLogOut = () => {
        logOut()
            .then(() => console.log("user looged out"))
            .catch((error) => console.error(error));
            navigate('/')
    };

    const items = (

        <>
            <li className={` text-lg text-white font-semibold `}>
                <NavLink className={({ isActive }) =>
                    isActive ? "text-black border-2 border-[#4fb6ff] bg-[#42e3c3]":""
                } to="/">Home</NavLink>
            </li>
            <li className={` text-lg md:text-white font-semibold`}>
                <NavLink className={({ isActive }) =>
                    isActive ? "bg-[#42e3c3] border-2 border-[#4fb6ff]" : ""
                } to="/dashboard/home">Dashboard</NavLink>
            </li>
            <li className={`${user ? 'hidden' : 'block'} text-lg md:text-white font-semibold `}>
                <NavLink className={({ isActive }) =>
                    isActive ? "bg-[#42e3c3] border-2 border-[#4fb6ff]" : ""
                } to="/login">Login</NavLink>
            </li>
            
        </>
    );
    return (
        <div className="navbar bg-teal-700  lg:px-10  ">
            <div className="navbar-start">
                <div className="md:ml-0 -ml-4 dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
                    >
                        {items}
                        <div className="md:hidden  mt-2 flex justify-center">
                            <a onClick={handleLogOut} className=" border hover:border-[#4fb6ff] hover:bg-[#42e3c3]  bg-gray-300 px-2 rounded-lg py-2 font-semibold cursor-pointer">
                                Sign Out
                            </a>
                        </div>
                    </ul>
                </div>
                <img
                    src="https://i.ibb.co/7Y0KnYJ/logo.png"
                    className="md:ml-0 -ml-2 w-8  rounded-full"
                    alt=""
                />
                <a className="md:ml-0 text-gray-200 -ml-2 pr-0 btn btn-ghost normal-case text-3xl font-bold font-serif">
                    Task Management
                </a>
            </div>
            <div className="navbar-center hidden lg:flex ml-32 ">
                <ul className="menu menu-horizontal px-1 flex items-center">{items}</ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <>
                        <button >
                            <img className="hidden md:block w-10 mr-2 h-10 rounded-full" title={user.displayName} src={user.photoURL} />
                        </button>
                        <a onClick={handleLogOut} className=" border hover:border-[#4fb6ff] hover:bg-[#42e3c3]  hidden md:block bg-gray-300 px-2 rounded-lg py-2 font-semibold cursor-pointer">
                            Sign Out
                        </a>
                    </>
                ) : (
                    <>

                    </>
                )} 
            </div>
        </div>
    );
};

export default NavBar;
