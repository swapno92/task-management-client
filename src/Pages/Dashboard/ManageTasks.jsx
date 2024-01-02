import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import ManageTask from "./ManageTask";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const ManageTasks = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext)

    const { data: firstNewTask = [], refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await axiosPublic.get(`myTasks/${user?.email}`);
            return res.data;
        }
    })
    const [tasks, setTasks] = ([firstNewTask])

    const [todos, setTodos] = useState([])
    const [OnGoing, setOnGoing] = useState([])
    const [completed, setCompleted] = useState([])

    useEffect(() => {
        const fTodos = tasks.filter(task => task.status === 'todo')
        const fOnGoing = tasks.filter(task => task.status === 'OnGoing')
        const fCompleted = tasks.filter(task => task.status === 'completed')

        setTodos(fTodos)
        setOnGoing(fOnGoing)
        setCompleted(fCompleted)

    }, [tasks])

    const statuses = ["todo", "OnGoing", "completed"]


    return (
        <>
            <DndProvider backend={HTML5Backend}>
                <div className="min-h-80 px-3 rounded-lg space-y-8">
                    {
                        statuses.map((sta, index) => <ManageTask key={index} sta={sta} refetch={refetch} completed={completed} OnGoing={OnGoing} todos={todos} tasks={tasks} setTasks={setTasks}  ></ManageTask>)
                    }
                </div>
            </DndProvider>
        </>
    );
};

export default ManageTasks;