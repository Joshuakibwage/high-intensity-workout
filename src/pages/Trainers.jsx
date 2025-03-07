 import Banner from "../components/Banner"
 import { TiSocialFacebook } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

const Trainers = () => {
  return (
    <section>
      <Banner
       label="Trainers"
       />

      <div className="container px-4 md:px-0 mx-auto py-8 md:py-14 ">
        <div className="flex flex-col justify-center items-center space-y-6">
          <p className="text-center text-xs text-primary tracking-[0.7rem]">
            TRAINER SKILLS
          </p>
          <h2 className="text-4xl font-inter font-bold md:text-6xl text-gray-300">
            WHY CHOOSE US
          </h2>
          <p className="text-center text-gray-300">
            At High Intensity, we are more than just a gym—we are a community dedicated to helping you achieve
             peak performance. Our state-of-the-art facility is designed for athletes of all levels, offering 
             cutting-edge equipment, expert coaching, and science-backed training programs that maximize 
             results. Whether your goal is to build strength, enhance endurance, lose weight, or improve 
             overall fitness, we provide the tools and support needed to push past your limits.  
          </p>
          <div className="w-[80%] space-y-12">
            <div className="space-y-2">
              <div className="flex items-center">
                <p>Strength Training</p>
                <p className="ml-auto">90%</p>
              </div>
              <div className="bg-slate-800 h-2 rounded-full w-[80%]">
                <div className="h-full bg-primary w-[90%] rounded-tr-full rounded-br-full">

                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <p>Cardio Training</p>
                <p>70%</p>
              </div>
              <div className="bg-slate-800 h-2 rounded-full w-[80%]">
                <div className="h-full bg-primary w-[70%] rounded-tr-full rounded-br-full">

                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <p>Stretching</p>
                <p>50%</p>
              </div>
              <div className="bg-slate-800 h-2 rounded-full w-[80%]">
                <div className="h-full bg-primary w-[50%] rounded-tr-full rounded-br-full">

                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <p>Swimming</p>
                <p>80%</p>
              </div>
              <div className="bg-slate-800 h-2 rounded-full w-[80%]">
                <div className="h-full bg-primary w-[80%] rounded-tr-full rounded-br-full">

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* professional trainers section */}

        <div className="py-6 md:py-16">
          <div className="text-center space-y-3">
            <h3 className="text-4xl font-inter font-bold md:text6xl text-gray-300">
              PROFESSIONAL TRAINERS
            </h3>
            <p className="font-inter text-gray-300">
              our team of certified fitness professionals are dedicated to guiding you through every step of 
              your fitness journey.  
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 py-8 md:py-18 gap-8">
            <div className="flex flex-col items-center space-y-2">
              <img 
                src="https://fithouse.projectbws.com/wp-content/uploads/2022/12/Pic-53.png" 
                alt="trainers"
                className="h-[300px] "
              />
              <h3 className="text-2xl font-medium font-inter text-gray-300">James Carter</h3>
              <p className="text-xs text-gray-300">Head & Strength Coach</p>
              <div className="flex gap-4">
                <div className="p-2 border cursor-pointer hover:bg-primary/50 border-gray-700 rounded-full
                delay-200 transition-colors ease-in-out">
                  <TiSocialFacebook />
                </div>
                <div className="p-2 border cursor-pointer hover:bg-primary/50 border-gray-700 rounded-full
                delay-200 transition-colors ease-in-out">
                  <FaXTwitter />
                </div>
                <div className="p-2 border cursor-pointer hover:bg-primary/50 border-gray-700 rounded-full
                delay-200 transition-colors ease-in-out">
                  <FaTiktok  />
                </div>
              </div>
            </div>
            {/* car 2 */}
            <div className="flex flex-col items-center space-y-2">
              <img 
                src="https://fithouse.projectbws.com/wp-content/uploads/2022/12/Pic-51.png" 
                alt="trainers"
                className="h-[300px] "
              />
              <h3 className="text-2xl font-medium font-inter text-gray-300">James Carter</h3>
              <p className="text-xs text-gray-300">Head & Strength Coach</p>
              <div className="flex gap-4">
                <div className="p-2 border cursor-pointer hover:bg-primary/50 border-gray-700 rounded-full
                delay-200 transition-colors ease-in-out">
                  <TiSocialFacebook />
                </div>
                <div className="p-2 border cursor-pointer hover:bg-primary/50 border-gray-700 rounded-full
                delay-200 transition-colors ease-in-out">
                  <FaXTwitter />
                </div>
                <div className="p-2 border cursor-pointer hover:bg-primary/50 border-gray-700 rounded-full
                delay-200 transition-colors ease-in-out">
                  <FaTiktok  />
                </div>
              </div>
            </div>
            {/* card 3 */}
            <div className="flex flex-col items-center space-y-2">
              <img 
                src="https://fithouse.projectbws.com/wp-content/uploads/2022/12/Pic-50.png" 
                alt="trainers"
                className="h-[300px] "
              />
              <h3 className="text-2xl font-medium font-inter text-gray-300">James Carter</h3>
              <p className="text-xs text-gray-300">Head & Strength Coach</p>
              <div className="flex gap-4">
                <div className="p-2 border cursor-pointer hover:bg-primary/50 border-gray-700 rounded-full
                delay-200 transition-colors ease-in-out">
                  <TiSocialFacebook />
                </div>
                <div className="p-2 border cursor-pointer hover:bg-primary/50 border-gray-700 rounded-full
                delay-200 transition-colors ease-in-out">
                  <FaXTwitter />
                </div>
                <div className="p-2 border cursor-pointer hover:bg-primary/50 border-gray-700 rounded-full
                delay-200 transition-colors ease-in-out">
                  <FaTiktok  />
                </div>
              </div>
            </div>
            {/* card 4 */}
            <div className="flex flex-col items-center space-y-2">
              <img 
                src="https://fithouse.projectbws.com/wp-content/uploads/2022/12/Pic-52.png" 
                alt="trainers"
                className="h-[300px] "
              />
              <h3 className="text-2xl font-medium font-inter text-gray-300">James Carter</h3>
              <p className="text-xs text-gray-300">Head & Strength Coach</p>
              <div className="flex gap-4">
                <div className="p-2 border cursor-pointer hover:bg-primary/50 border-gray-700 rounded-full
                delay-200 transition-colors ease-in-out">
                  <TiSocialFacebook />
                </div>
                <div className="p-2 border cursor-pointer hover:bg-primary/50 border-gray-700 rounded-full
                delay-200 transition-colors ease-in-out">
                  <FaXTwitter />
                </div>
                <div className="p-2 border cursor-pointer hover:bg-primary/50 border-gray-700 rounded-full
                delay-200 transition-colors ease-in-out">
                  <FaTiktok  />
                </div>
              </div>
            </div>
            {/* card 5 */}
            <div className="flex flex-col items-center space-y-2">
              <img 
                src="https://fithouse.projectbws.com/wp-content/uploads/2022/12/Pic-54.png" 
                alt="trainers"
                className="h-[300px] "
              />
              <h3 className="text-2xl font-medium font-inter text-gray-300">James Carter</h3>
              <p className="text-xs text-gray-300">Head & Strength Coach</p>
              <div className="flex gap-4">
                <div className="p-2 border cursor-pointer hover:bg-primary/50 border-gray-700 rounded-full
                delay-200 transition-colors ease-in-out">
                  <TiSocialFacebook />
                </div>
                <div className="p-2 border cursor-pointer hover:bg-primary/50 border-gray-700 rounded-full
                delay-200 transition-colors ease-in-out">
                  <FaXTwitter />
                </div>
                <div className="p-2 border cursor-pointer hover:bg-primary/50 border-gray-700 rounded-full
                delay-200 transition-colors ease-in-out">
                  <FaTiktok  />
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}

export default Trainers