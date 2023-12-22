import { useQuery } from "@tanstack/react-query";

import useAxiosPublic from "../../hooks/useAxiosPublic";
import ManageTask from "./ManageTask";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const ManageTasks = () => {
    const axiosPublic = useAxiosPublic();
    const {user} = useContext(AuthContext)
    console.log(user)


    const { data: tasks = [],refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await axiosPublic.get(`myTasks/${user?.email}`);
            return res.data;
        }
    })
    // console.log(tasks)

    return (
        <div className="">
            <h2 className="text-center text-2xl font-bold my-3 underline mb-8">To Do List</h2>
            <div className="space-y-1">
                {
                    tasks.map(task => <ManageTask key={task._id} task={task} refetch={refetch}></ManageTask>)
                }
            </div>
            <h2 className="text-center text-2xl font-bold my-3 underline mb-12">On Going Task</h2>
            <h2 className="text-center text-2xl font-bold my-3 underline">Completed Task</h2>

        </div>
    );
};

export default ManageTasks;