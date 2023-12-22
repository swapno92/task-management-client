import {  NavLink, Outlet, useNavigate } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { LuLogOut } from "react-icons/lu";



const Dashboard = () => {
    const {user,logOut} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogOut = () => {
        logOut()
            .then(() => console.log("user looged out"))
            .catch((error) => console.error(error));
        navigate('/')
    };
    return (
        <div className="md:flex">
            <div className="md:w-64 md:min-h-screen bg-[#418b8c]">
                <ul className="menu p-4 space-y-4 pt-8">
                    <div className=" flex flex-col items-center">
                        <img className=" w-24 rounded-full " src={user?.photoURL} alt="" />
                        <h2 className="text-2xl text-[#48f6ff] font-bold">{user?.displayName}</h2>
                    </div>
                    <li>
                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-lg font-bold border-2 border-[#4fb6ff] bg-[#42e3c3]" : "text-lg font-semibold bg-cyan-500"
                        } to="/dashboard/home">
                            <MdDashboard></MdDashboard>
                           Management Task</NavLink>
                    </li>
                    <li>
                        <NavLink className={ ({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "border-2 text-xl font-bold border-[#4fb6ff] bg-[#42e3c3]" : "bg-cyan-500 text-xl font-bold"
                        } to="/dashboard/createTask">
                            <CgProfile></CgProfile>
                            Create Task</NavLink>
                    </li>
                    <div className="flex justify-center items-center relative">
                        <a onClick={handleLogOut} className=" border hover:border-[#4fb6ff] hover:bg-[#42e3c3]  bg-gray-300 px-2 pr-8 rounded-lg py-2 font-semibold cursor-pointer">
                            Sign Out 
                        </a>
                        <LuLogOut className="absolute md:right-[70px] right-[130px]"></LuLogOut>
                    </div>
                </ul>
            </div>
            <div className="flex-1 p-8 bg-[#bde4e4]">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;