import { Link } from "react-router-dom"
import { TiSocialFacebook } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="">
      <div className="container mx-auto py-12 border-t border-gray-800 mt-8 md:mt-24 flex flex-col md:flex-row ">
        <div className="flex flex-col w-full md:max-w-md items-center space-y-3">
          <Link to ='/' className="flex flex-col items-start hover:translate-x-1 delay-200 ease-in-out 
          transition-all">
            <h1 className="font-cursive text-4xl ">
              High Intensity
            </h1>
            <span  className="text-xs tracking-[0.5rem] text-center text-primary">WORK OUT</span>
          </Link>
          <div>
            <p className="text-xs text-gray-400 w-[350px]">
              Your destination for transformative fitness. We provide high-energy workouts and expert 
              guidance to help you reach peak performance.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="p-3 border cursor-pointer hover:bg-primary/50 border-gray-700 rounded-full
            delay-200 transition-colors ease-in-out">
              <TiSocialFacebook />
            </div>
            <div className="p-3 border cursor-pointer hover:bg-primary/50 border-gray-700 rounded-full
            delay-200 transition-colors ease-in-out">
              <FaXTwitter />
            </div>
            <div className="p-3 border cursor-pointer hover:bg-primary/50 border-gray-700 rounded-full
            delay-200 transition-colors ease-in-out">
              <FaTiktok />
            </div>
          </div>
        </div>

        <div className="flex  md:flex-row justify-evenly w-full items-center mt-8 md:mt-0 ">
          <div className="space-y-3">
            <p className="text-gray-300 font-bold">WEBSITE</p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li className="hover:text-gray-300">Programs</li>
              <li className="hover:text-gray-300">About Club</li>
              <li className="hover:text-gray-300">Community</li>
              <li className="hover:text-gray-300">News & Blog</li>
            </ul>
          </div>
          <div className="space-y-3">
          <p className="text-gray-300 font-bold">SUPPORT</p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li className="hover:text-gray-300">FAQ</li>
              <li className="hover:text-gray-300">Support Center</li>
              <li className="hover:text-gray-300">Contact Us</li>
               
            </ul>
          </div>
          <div className="space-y-3">
          <p className="text-gray-300 font-bold">PRICING</p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li className="hover:text-gray-300">Basic Plan</li>
              <li className="hover:text-gray-300">Premium Plan</li>
              <li className="hover:text-gray-300">Pro Plan</li>
               
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <p className="py-3 text-gray-400 text-center text-sm">
          &copy; {new Date().getFullYear()} High Intensity WorkOut
        </p>
      </div>
    </footer>
  )
}

export default Footer