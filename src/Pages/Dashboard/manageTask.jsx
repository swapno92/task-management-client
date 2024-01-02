
import { useDrop } from "react-dnd";
import swal from "sweetalert";
import Task from "./Task";


const ManageTask = ({ sta, setTasks, todos, refetch, OnGoing, completed, tasks }) => {

    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'task',
        drop: (item) => addItemToSection(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    let text = "To Do"
    let tasksToMap = todos
    if (sta === 'OnGoing') {
        text = "OnGoing"
        tasksToMap = OnGoing
    }

    if (sta === "completed") {
        text = "Completed"
        tasksToMap = completed
    }
    const addItemToSection = id => {
        const status = sta
        const updateTask = { status }
        fetch(`https://task-management-server-black.vercel.app/taskspro/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateTask)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch();
                swal(`task added ${sta} list`)
            })
    }

    return (
        <div ref={drop} className={`line space-y-2 ${isOver ? 'bg-slate-200' : ''}  bg-yellow-50 min-h-44  p-3 rounded-lg `}>
            <h2 className=" text-center text-2xl font-bold underline mb-2">{text}</h2>
            {
                tasksToMap.length > 0 ? tasksToMap.map(task => (<Task key={task._id} task={task} tasks={tasks} setTasks={setTasks} refetch={refetch} />
                ))
                :
                    <div className="text-3xl font-bold font-serif  text-center "><h2 className=" md:w-1/2 mx-auto line mt-10  rounded-2xl">No Task <span  className="text-green-600">{text}</span> list</h2></div>
        }
        </div>

    );
};

export default ManageTask;





