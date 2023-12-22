
const Users = () => {
    const users = (
        <>
            
            <div data-aos="fade-down-right" className="bg-teal-100  py-4  rounded-2xl shadow-xl text-2xlj font-semibold">bankers</div>
            <div data-aos="fade-down-right" className="bg-teal-100  py-4  rounded-2xl shadow-xl text-2xlj font-semibold">Freelancers</div>
            <div data-aos="fade-down-right" className="bg-teal-100  py-4  rounded-2xl shadow-xl text-2xlj font-semibold">developers</div>
            <div data-aos="fade-down-right" className="bg-teal-100  py-4  rounded-2xl shadow-xl text-2xlj font-semibold">Artists</div>
            <div data-aos="fade-down-right" className="bg-teal-100  py-4  rounded-2xl shadow-xl text-2xlj font-semibold">Educators</div>
            <div data-aos="fade-down-right" className="bg-teal-100 py-4  rounded-2xl shadow-xl text-2xlj font-semibold">Designers</div>
            <div data-aos="fade-down-right" className="bg-teal-100  py-4  rounded-2xl shadow-xl text-2xlj font-semibold">Teachers</div>
            <div data-aos="fade-down-right" className="bg-teal-100  py-4  rounded-2xl shadow-xl text-2xlj font-semibold">Content Creators</div>
        </>
    )

    return (
        <div className="py-8 rounded-lg text-center border border-teal-400">
            <h2 data-aos="zoom-in-up" className="text-4xl  font-bold font-serif md:pt-8 text-[#6571ca]">The most popular user type is ...</h2>
            <div  className="lg:w-[60%] md:w-[75%] mx-auto grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mt-8 -gap-x-12 gap-y-6 md:gap-x-16 gap-x-10 md:px-0 px-3">
                {users}
            </div>
        </div>
    );
};

export default Users;