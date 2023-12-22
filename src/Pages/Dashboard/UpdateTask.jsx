import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateTask = () => {
    const { title, description, deadline, _id  } = useLoaderData()
    console.log(title)

    const handleUpdate = event => {
        event.preventDefault()
        const form = event.target;

        const title = form.title.value
        const deadline = form.deadline.value
        const priority = form.priority.value
        const description = form.description.value
        const updateTask = { title, description, deadline, priority }
        console.log(updateTask)
        fetch(`https://task-management-server-black.vercel.app/tasks/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateTask)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // if (data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Assignment Updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                // }
            })

    }

    return (
        <div className="">
            <h2 className="text-center text-2xl font-bold my-3 underline">Update Task</h2>
            <form onSubmit={handleUpdate}>
                <div className="my-4 mx-4  py-3 rounded-lg border border-purple-500">
                    <div className="space-y-1 mt-8 flex items-center">
                        <h3 className="text-lg font-semibold ml-8">Task Title : </h3>
                        <input
                            type="text"
                            defaultValue={title}
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
                            defaultValue={description}
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
                            defaultValue={deadline}
                            type="date"
                            name="deadline"
                            className="input input-bordered pl-8 w-[70%] ml-4"
                            id=""
                            placeholder="date"
                        />
                    </div>
                </div>
                <div className=" flex justify-center items-center mt-8">
                    <button className=" bg-gray-700 text-white rounded-lg px-12 py-3">
                        Update Task
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateTask;