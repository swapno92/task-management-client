import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import ManageTask from "./ManageTask";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const ManageTasks = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext)
    // console.log(user)

    const { data: tasks = [], refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await axiosPublic.get(`myTasks/${user?.email}`);
            return res.data;
        }
    })

    const [players, setPlayers] = useState([tasks])


    return (
        <>
            <div className="">
                <h2 className="text-center text-2xl font-bold my-3 underline mb-2">To Do List</h2>
                <div className="space-y-2 line bg-yellow-50 min-h-80 p-3 rounded-lg">
                    {
                        tasks.map(task => <ManageTask key={task._id} task={task} refetch={refetch}  ></ManageTask>)
                    }
                </div>
                <h2 className="text-center text-2xl font-bold my-3 underline mb-2">On Going Task</h2>
                <div className="space-y-1 bg-gray-400 min-h-80 p-3 rounded-lg" >
                    {/* {
                        tasks.map(task => <ManageTask key={task._id} task={task} refetch={refetch}></ManageTask>)
                    } */}
                </div>
                <h2 className="text-center text-2xl font-bold my-3 underline mb-2">Completed Task</h2>
                <div className="space-y-1 bg-gray-400 min-h-80 p-3 rounded-lg">
                    {/* {
                    tasks.map(task => <ManageTask key={task._id} task={task} refetch={refetch}></ManageTask>)
                } */}
                </div>
            </div>








        </>
    );
};

export default ManageTasks;