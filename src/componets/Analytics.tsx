
import Laptop from '../assets/laptop.jpg'


const Analytics = () => {
    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2"> 
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/"/>
            <div className='flex flex-col justify-centerr'>
                <p className='text-[#31525b] font-bold'>Why Choose Us</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>What Sets Us Apart</h1>
                <p>Our approach combines tailored strategies designed for each client’s unique goals, backed by years of 
                    industry experience across diverse markets. We leverage cutting-edge tools and analytics to optimize 
                    content and drive real, measurable results. Our team prioritizes data-driven insights to ensure maximum ROI,
                     while maintaining a flexible, hands-on approach to customer service that adapts to the fast-evolving digital landscape. Whether you're looking to
                     boost engagement or grow brand awareness, we're committed to helping you achieve lasting success.
                </p>
                <button className='bg-[#B3DEE5] text-[#31525b] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 '>Get Started</button>
            </div>
            
            </div>
        </div>

    )
}

export default Analytics;