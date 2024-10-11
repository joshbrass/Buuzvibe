import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
    return (
        <div className="text-white">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-[#FAE6B1] font-bold p-2">Elevate Your Brand with Expert Social Media Management</p>
                <h1 className="md:text-2xl sm:text-xl text-4xl font-bold md:py-9">Unlock Social Media Success.</h1>
                <div className="flex justify-center items-center">
                    <p className="lg:text-lg md:text-base sm:text-sm text-xs font-bold">
                        Tailored Strategies Designed For Your
                    </p>
                    <span className="lg:text-xl md:text-lg sm:text-sm text-xs font-bold md:pl-2 pl-2">
                        <Typewriter
                        words={['Media', 'Brand', 'Growth']}
                        loop={0} // infinite loop
                        cursor
                        cursorStyle="_"
                        typeSpeed={120}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        />
                    </span>
                </div>


                <p className="md:text-xl text-2xl font-bold text-gray-500">
                    Maximize your online presence and connect with your audience through data-driven strategies
                </p>
                <button className="bg-[#B3DEE5] w-[250px] rounded-md font-medium my-8 mx-auto py-3 text-[#31525b]">
                Get a Free Consultation
                </button>
            </div>
        </div>
    );
};

export default Hero;
