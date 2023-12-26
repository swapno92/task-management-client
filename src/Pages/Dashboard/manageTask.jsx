
import { useDrop } from "react-dnd";
import swal from "sweetalert";
import Task from "./Task";


const ManageTask = ({ sta, setTasks, todos, refetch, inProgress, closed, tasks }) => {

    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'task',
        drop: (item) => addItemToSection(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    let text = "To Do List"
    let tasksToMap = todos
    if (sta === 'inprogress') {
        text = "On Going Task"
        tasksToMap = inProgress
    }

    if (sta === "closed") {
        text = "Completed Task"
        tasksToMap = closed
    }
    const addItemToSection = id => {
        const status = sta
        const updateTask = { status }
        fetch(`http://localhost:5000/taskspro/${id}`, {
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
        <div ref={drop} className={`line space-y-2 ${isOver ? 'bg-slate-200' : ''}  bg-yellow-50 min-h-80 p-3 rounded-lg `}>
            <h2 className=" text-center text-2xl font-bold underline mb-2">{text}</h2>
            {tasksToMap.length > 0 && tasksToMap.map(task => (<Task key={task._id} task={task} tasks={tasks} setTasks={setTasks} refetch={refetch} />
            ))}
        </div>

    );
};

export default ManageTask;





