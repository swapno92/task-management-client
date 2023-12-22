import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className="rounded-lg bg-img  md:h-[70vh] h-[50vh] md:relative md:block flex items-center">
            <div className=' text-[#20236c] font-serif font-bold md:absolute left-36 top-28 space-y-3 md:pl-0 pl-4'>
                <h2 className=' md:text-5xl text-2xl'>PROJECT</h2>
                <p className='md:text-5xl text-2xl'>MANAGEMENT</p>

                <Link to='/dashboard' className={` btn text-[#181542] border border-[rgba(79,182,255,.3)] bg-[rgba(66,227,195,.5)]`}>Lt's Explore</Link>

            </div>
        </div>
    );
};

export default Banner;