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
    const [inProgress, setInProgress] = useState([])
    const [closed, setClosed] = useState([])

    useEffect(() => {
        const fTodos = tasks.filter(task => task.status === 'todo')
        const fInProgress = tasks.filter(task => task.status === 'inprogress')
        const fClosed = tasks.filter(task => task.status === 'closed')

        setTodos(fTodos)
        setInProgress(fInProgress)
        setClosed(fClosed)

    }, [tasks])

    const statuses = ["todo", "inprogress", "closed"]


    return (
        <>
            <DndProvider backend={HTML5Backend}>
                <div className="min-h-80 px-3 rounded-lg space-y-8">
                    {
                        statuses.map((sta, index) => <ManageTask key={index} sta={sta} refetch={refetch} closed={closed} inProgress={inProgress} todos={todos} tasks={tasks} setTasks={setTasks}  ></ManageTask>)
                    }
                </div>
            </DndProvider>
        </>
    );
};

export default ManageTasks;