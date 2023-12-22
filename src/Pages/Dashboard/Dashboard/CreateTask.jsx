import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import swal from "sweetalert";

const CreateTask = () => {
    const { user } = useContext(AuthContext)

    const handleCreateTask = event => {
        event.preventDefault()
        const form = event.target;

        const title = form.title.value
        const deadline = form.deadline.value
        const priority = form.priority.value
        const email = form.email.value
        const description = form.description.value
        console.log(priority)
        const newTask = { title, email, description, deadline, priority }
        console.log(newTask)

        fetch("http://localhost:5000/tasks", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newTask),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                swal('Added Posts Successfully')
            });
        console.log('ok')
    }
    return (
        <div className="">
            <h2 className="text-center text-2xl font-bold my-3 underline">Create Task</h2>
            <form onSubmit={handleCreateTask}>
                <div className="my-4 mx-4  py-3 rounded-lg border border-purple-500">
                    <div className="space-y-1 mt-8 flex items-center">
                        <h3 className="text-lg font-semibold ml-8">Task Title : </h3>
                        <input
                            type="text"
                            name="title"
                            className="input input-bordered pl-8 w-[70%] ml-4"
                            id=""
                            placeholder="title"
                        />
                    </div>
                    <div className="space-y-1 mt-8 flex">
                        <h3 className="text-lg font-semibold ml-4">Description :</h3>
                        <textarea
                            className="border border-gray-300 rounded-lg p-8 md:w-[70%] w-[90%]  ml-4"
                            name="description"
                            id=""
                            rows="1"
                            placeholder="Short Description"
                        ></textarea>
                    </div>
                    <div className="space-y-1 mt-8 flex items-center">
                        <h3 className="text-lg font-semibold ml-4">Task Priority :</h3>
                        <select id="" name="priority" className="input input-bordered md:w-[50%] w-[70%] pl-8 ml-4 ">
                            <option value="Easy">Easy </option>
                            <option value="Medium">Medium</option>
                            <option value="Hard" >Hard</option>
                        </select>
                    </div>
                    <div className="space-y-1 mt-8 flex items-center">
                        <h3 className="text-lg font-semibold ml-8">Task Dedline : </h3>
                        <input
                            type="date"
                            name="deadline"
                            className="input input-bordered pl-8 w-[70%] ml-4"
                            id=""
                            placeholder="date"
                        />
                    </div>
                    <div className="space-y-1 mt-8 hidden">
                        <h3 className="text-lg font-semibold ml-4">User Email :</h3>
                        <input
                            className="input input-bordered md:w-[85%] w-[90%] pl-8 md:ml-0 ml-4"
                            type="email"
                            name="email"
                            defaultValue={user?.email}
                            id=""
                            placeholder="User Email"
                        />
                    </div>
                </div>
                <div className=" flex justify-center items-center mt-8">
                    <button className=" bg-gray-700 text-white rounded-lg px-12 py-3">
                        Add New Task
                    </button>
                </div>
            </form>
        </div>
    );

};
export default CreateTask;