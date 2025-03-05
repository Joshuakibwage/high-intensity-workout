import { LiaWpbeginner } from "react-icons/lia";
import { IoMdFitness } from "react-icons/io";
import { FaSwimmingPool } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoFitnessOutline } from "react-icons/io5";

const Services = () => {
  return (
    <section>
        <div className="container mx-auto py-16 ">
            <div className="flex flex-col items-center space-y-2">
                <h1 
                className="font-semibold font-inter text-3xl text-gray-300 border-l-4 border-primary pl-3">
                    Our Services
                </h1>
                <p className="max-w-sml text-gray-400 font-inter">
                    Unlock Your Full Potential with Our Expert-Designed Fitness Services – Tailored Workouts, 
                    Progress Tracking, and Personalized Coaching to Help You Achieve Your Goals Faster!
                </p>
            </div>
            <div className="mt-16 flex flex-col lg:flex-row gap-8">
                {/* first div */}
                <div className="space-y-10 flex flex-col justify-center">
                    <div className="flex gap-8 items-center">
                        <div className="max-w-sm">
                            <h3 className="text-gray-300 font-semibold">Lessons For Beginners</h3>
                            <p className="text-sm text-gray-400">
                                Learn the fundamentals of fitness with guided workouts designed to build 
                                confidence, strength, and endurance at your own pace.
                            </p>
                        </div>
                        <div 
                        className=" w-20 h-20 flex justify-center items-center -rotate-50 rounded-md
                        bg-accent">
                            <LiaWpbeginner size={30} className="flex shrink-0"/>
                        </div>
                    </div>
                    <div className="flex gap-8 items-center">
                        <div className="max-w-sm">
                            <h3 className="text-gray-300 font-semibold">Pro Workouts</h3>
                            <p className="text-sm text-gray-400">
                                Take your training to the next level with advanced workout programs tailored 
                                for strength, endurance, and peak performance
                            </p>
                        </div>
                        <div 
                        className=" w-20 h-20 flex justify-center items-center -rotate-50 rounded-md
                        bg-primary">
                            <IoMdFitness size={30} className=""/>
                        </div>
                    </div>
                    <div className="flex gap-8 items-center">
                        <div className="max-w-sm">
                            <h3 className="text-gray-300 font-semibold">Shop For Workout</h3>
                            <p className="text-sm text-gray-400">
                                Get high-quality fitness gear, apparel, and supplements to support your journey and maximize your 
                                results.
                            </p>
                        </div>
                        <div 
                        className=" w-20 h-20 flex justify-center items-center -rotate-50 rounded-md
                        bg-secondary">
                            <MdOutlineShoppingCart size={30} className="rotate-50"/>
                        </div>
                    </div>
                    <div className="flex gap-8 items-center">
                        <div className="max-w-sm">
                            <h3 className="text-gray-300 font-semibold">Pool Events</h3>
                            <p className="text-sm text-gray-400">
                                Join exciting swimming competitions, aqua fitness classes, and community 
                                events for fun and full-body conditioning.
                            </p>
                        </div>
                        <div 
                        className=" w-20 h-20 flex justify-center items-center -rotate-50 rounded-md
                        bg-primary">
                            <FaSwimmingPool size={30} className="rotate-50"/>
                        </div>
                    </div>
                </div>
                {/* second div */}
                <div className="space-y-10 flex flex-col lg:justify-center mt-14 md:mt-28">
                    <div className="flex flex-row-reverse gap-8 items-center">
                        <div className="max-w-sm">
                            <h3 className="text-gray-300 font-semibold">Health Corner</h3>
                            <p className="text-sm text-gray-400">
                                Access expert tips, meal plans, and nutritional guidance to fuel your body 
                                for optimal performance and recovery.
                            </p>
                        </div>
                        <div 
                        className=" w-20 h-20 flex justify-center items-center -rotate-50 rounded-md
                        bg-accent">
                            <IoFitnessOutline size={30} className="flex shrink-0"/>
                        </div>
                    </div>
                    <div className="flex flex-row-reverse gap-8 items-center">
                        <div className="max-w-sm">
                            <h3 className="text-gray-300 font-semibold">Pro Workouts</h3>
                            <p className="text-sm text-gray-400">
                                Take your training to the next level with advanced workout programs tailored 
                                for strength, endurance, and peak performance
                            </p>
                        </div>
                        <div 
                        className=" w-20 h-20 flex justify-center items-center -rotate-50 rounded-md
                        bg-primary">
                            <IoMdFitness size={30} className=""/>
                        </div>
                    </div>
                    <div className="flex flex-row-reverse gap-8 items-center">
                        <div className="max-w-sm">
                            <h3 className="text-gray-300 font-semibold">Shop For Workout</h3>
                            <p className="text-sm text-gray-400">
                                Get high-quality fitness gear, apparel, and supplements to support your journey and maximize your 
                                results.
                            </p>
                        </div>
                        <div 
                        className=" w-20 h-20 flex justify-center items-center -rotate-50 rounded-md
                        bg-secondary">
                            <MdOutlineShoppingCart size={30} className="rotate-50"/>
                        </div>
                    </div>
                    <div className="flex flex-row-reverse gap-8 items-center">
                        <div className="max-w-sm">
                            <h3 className="text-gray-300 font-semibold">Pool Events</h3>
                            <p className="text-sm text-gray-400">
                                Join exciting swimming competitions, aqua fitness classes, and community 
                                events for fun and full-body conditioning.
                            </p>
                        </div>
                        <div 
                        className=" w-20 h-20 flex justify-center items-center -rotate-50 rounded-md
                        bg-primary">
                            <FaSwimmingPool size={30} className="rotate-50"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services