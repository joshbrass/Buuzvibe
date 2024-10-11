
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa'

const Footer = () => {

    return (
        <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-col-3 gap-8 text-gray-300">
            <div>
                <h1 className="w-full text-3xl font-bold text-[#B3DEE5] ">BuzzVibe</h1>
                <p className="py-4">At BuzzVibe, we specialize in driving growth and engagement 
                    through innovative social media strategies. Our team is dedicated to helping brands connect with 
                    their audience, build their online presence, 
                    and achieve measurable results. Let’s take your brand to the next level!.
                </p>
                <div className="flex  md:w-[75%]  my-6">
                <FaFacebookSquare size={30} />
                <FaInstagram size={30} />
                <FaTwitterSquare size={30} />
                <FaGithubSquare size={30} />
                <FaDribbbleSquare size={30} />
                </div>
            </div>
            <div className="lg:col-span-2 flex justify-between">
                <div>
                    <h6 className="font-medium text-gray-400">Solutions</h6>
                    <ul>
                        <li className="py-2 text-sm">Analytics</li>
                        <li className="py-2 text-sm">Marketing</li>
                        <li className="py-2 text-sm">Commerce</li>
                        <li className="py-2 text-sm">Insights</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-medium text-gray-400">Support</h6>
                    <ul>
                        <li className="py-2 text-sm">Pricing</li>
                        <li className="py-2 text-sm">Documentation</li>
                        <li className="py-2 text-sm">Guides</li>
                        <li className="py-2 text-sm">API Status</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-medium text-gray-400">Company</h6>
                    <ul>
                        <li className="py-2 text-sm">About</li>
                        <li className="py-2 text-sm">Blogs</li>
                        <li className="py-2 text-sm">jobs</li>
                        <li className="py-2 text-sm">Press</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-medium text-gray-400">Legal</h6>
                    <ul>
                        <li className="py-2 text-sm">Claim</li>
                        <li className="py-2 text-sm">Policy</li>
                        <li className="py-2 text-sm">terms</li>
                        <li className="py-2 text-sm">Insights</li>
                    </ul>
                </div>

            </div>
            

        </div>

    )
}


export default Footer;