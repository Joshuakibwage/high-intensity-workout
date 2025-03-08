import Banner from "../components/Banner"
import { GiBoxingGloveSurprise } from "react-icons/gi"
import { FaBasketball } from "react-icons/fa6";
import { MdSportsHandball } from "react-icons/md";
import { FaSwimmingPool } from "react-icons/fa";



const Classes = () => {
  return (
    <section>
      <Banner 
        label="CLASSES"
      />
      <div className="container mx-auto py-8 md:py-24 px-6 md:px-0">
        <div className="flex flex-col items-center">
          <p className="text-xs tracking-[0.8rem] text-primary">
            OUR CLASSES
          </p>
          <h2 className="text-4xl md:text-5xl font-inter font-bold text-gray-300">
            FEATURED TRAINING CLASSES
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 md:py-16">
          {/* card1 */}
          <div className="relative">
            <img 
              src="src/assets/class1.jpg" 
              alt="image" 
              className=""
            />
            <div className="absolute inset-0 bg-black/60 hover:bg-black/0.5 transition-colors delay-150 ease-in-out flex flex-col justify-end p-4 space-y-2">
              <p><GiBoxingGloveSurprise size={40} className="text-primary" /></p>
              <h2 className="font-bold">MMA Training</h2>
              <p className="text-sm ">high-intensity combat sport that combines techniques from various disciplines, including boxing, wrestling, Brazilian jiu-jitsu, and Muay Thai</p>
            </div>
          </div>
          {/* card-2 */}
          <div className="relative">
            <img 
              src="src/assets/class2.jpg" 
              alt="image" 
              className=""
            />
            <div className="absolute inset-0 bg-black/60 hover:bg-black/0.5 transition-colors delay-150 ease-in-out flex flex-col justify-end p-4 space-y-2">
              <p>< FaBasketball size={40} className="text-primary" /></p>
              <h2 className="font-bold">Sports Courts</h2>
              <p className="text-sm ">high-intensity combat sport that combines techniques from various disciplines, including boxing, wrestling, Brazilian jiu-jitsu, and Muay Thai</p>
            </div>
          </div>
          {/* card-3 */}
          <div className="relative">
            <img 
              src="src/assets/class3.jpg" 
              alt="image" 
              className=""
            />
            <div className="absolute inset-0 bg-black/60 hover:bg-black/0.5 transition-colors delay-150 ease-in-out flex flex-col justify-end p-4 space-y-2">
              <p><MdSportsHandball size={40} className="text-primary" /></p>
              <h2 className="font-bold">Cardio Training</h2>
              <p className="text-sm ">high-intensity combat sport that combines techniques from various disciplines, including boxing, wrestling, Brazilian jiu-jitsu, and Muay Thai</p>
            </div>
          </div>
          {/* card-4 */}
          <div className="relative">
            <img 
              src="src/assets/class4.jpg" 
              alt="image" 
              className=""
            />
            <div className="absolute inset-0 bg-black/60 hover:bg-black/0.5 transition-colors delay-150 ease-in-out flex flex-col justify-end p-4 space-y-2">
              <p><FaSwimmingPool size={40} className="text-primary" /></p>
              <h2 className="font-bold">Swimming</h2>
              <p className="text-sm ">high-intensity combat sport that combines techniques from various disciplines, including boxing, wrestling, Brazilian jiu-jitsu, and Muay Thai</p>
            </div>
          </div>
       
        </div>
      </div>
    </section>
  )
}

export default Classes