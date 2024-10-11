
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {

    return (
        <div className="w-full py-[10rem] px-4 bg-white">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Single} alt="" />
                    <h2 className="text-2xl font-bold text-center py-8">Service Cards</h2>
                    
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">Custom Solutions</p>
                        <p className="py-2 border-b mx-8">24/7 Support</p>
                        <p className="py-2 border-b mx-8">Proven Success</p>
                    </div>
                    <button className="text-black bg-[#B3DEE5] w-[200px] rounded-md font-medium my-6 mx-auto  px-6 ">Learn more</button>

                </div>
                <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
                    <img className="w-20 mx-auto mt-[-3rem] bg-transperent" src={Double} alt="" />
                    <h2 className="text-2xl font-bold text-center py-8">Feature</h2>
                    
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">50GB storage</p>
                        <p className="py-2 border-b mx-8">1 Granted User</p>
                        <p className="py-2 border-b mx-8">Send up to 2GB</p>
                    </div>
                    <button className="bg-black text-[#B3DEE5] w-[200px] rounded-md font-medium my-6 mx-auto  px-6 ">Learn more</button>

                </div>
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Triple} alt="" />
                    <h2 className="text-2xl font-bold text-center py-8">Benefit</h2>
                    
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">Increased Engagement</p>
                        <p className="py-2 border-b mx-8">Brand Awareness</p>
                        <p className="py-2 border-b mx-8">Boost Sales</p>
                    </div>
                    <button className="text-black bg-[#B3DEE5] w-[200px] rounded-md font-medium my-6 mx-auto  px-6 ">Learn more</button>

                </div>

            </div>

        </div>
    )
}

export default Cards;