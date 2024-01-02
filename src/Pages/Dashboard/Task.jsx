import { CiEdit } from "react-icons/ci";
import { MdFolderDelete } from "react-icons/md";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useDrag } from "react-dnd";
import { Link } from "react-router-dom";
import Swal from "sweetalert2"; 

const Task = ({ task, tasks, setTasks, refetch }) => {
    const { title, description, deadline, priority, _id } = task
    const [{ isDragging }, drag] = useDrag(() => ({
        item: { id: task._id },
        type: 'task',
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))
    const axiosPublic = useAxiosPublic();


    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosPublic.delete(`/tasks/${_id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Task has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return <div>
        <div>
            <div ref={drag} className={`collapse collapse-arrow  bg-teal-300`}>
                <input type="radio" name="my-accordion-2" checked="checked" />
                <div className="collapse-title text-xl font-medium border-b-2 rounded-lg border-gray-500 mb-2">
                    {title}
                </div>
                <div className="collapse-content md:flex  md:space-y-0 space-y-3">
                    <div className=" md:w-[70%]">
                        <p className="text-black">» {description}</p>
                        <br />
                        <div className="md:flex justify-around  md:space-y-0 space-y-3">
                            <div className="">
                                <span className="font-bold text-xl">Deadline -</span> <button className="btn 
                                    text-xl border border-cyan-300 bg-slate-300">{deadline}</button>
                            </div>
                            <div className="">
                                <span className="font-bold text-xl">Priority -</span> <button className="btn cla
                                    text-xl border border-cyan-300 bg-slate-300">{priority}</button>
                            </div>
                        </div>
                    </div>
                    <div className="md:block hidden divider border border-gray-300 h-[80%] pb-4 ml-4"></div>
                    <div className="md:w-[30%]  flex md:flex-col  justify-center space-y-4 items-center">
                        <Link to={`/dashboard/update/${_id}`} className="btn bg-[#65bada]">Update <CiEdit className="text-2xl"></CiEdit></Link>
                        <button onClick={() => handleDelete(_id)} className="btn bg-red-300">Delete <MdFolderDelete className="text-2xl text-red-900"></MdFolderDelete></button>
                    </div>
                </div>
            </div>            
        </div>
    </div>
}

export default Task;