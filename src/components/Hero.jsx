import heroImage from "../assets/heroImage.jpg"
import { Link } from "react-router-dom";
import Button from "./Button";




const Hero = () => {
  return (
    
    <section>
        <div className="container mx-auto py-20 flex flex-col md:flex-row gap-6">
            <div className="space-y-8 md:w-[50%] w-full order-2 md:order-1 px-8 md:px-0">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-inter font-bold text-gray-300">
                    Transform Your <span className="text-primary">Body</span> Elevate Your Life
                </h1>
                <p className="max-w-md font-inter text-gray-400">
                    A data-driven fitness experience designed to optimize your performance, track your 
                    progress, and keep you motivated every step of the journey
                </p>
                <div className=" text-gray-400 grid grid-cols-2 gap-4 md:grid-cols-4">
                    <div className="flex flex-col items-center">
                        <p className="font-semibold text-2xl">8</p>
                        <p className="text-xs">Fit house Club</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p>1.2k</p>
                        <p className="text-xs">Visitors Monthly</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p>130+</p>
                        <p className="text-xs">Pro Equipment</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p>100%</p>
                        <p className="text-xs">Quality</p>
                    </div>
                </div>

                <div className="flex gap-4 ">

                    <Button 
                        label="Start Now"
                        className="bg-primary px-6 py-3 rounded-lg cursor-pointer "
                    />
                    
                    <Button 
                        label="Learn More"
                        className="border-1 border-primary rounded-lg px-6 py-3 cursor-pointer"
                    />
                </div>
            </div>
            <div className="w-full md:w-[55%] order-1 md:order-2">
                <img 
                    src={heroImage} 
                    alt="hero image" 
                    className="w-full"
                />
            </div>
        </div>
    </section>
    
      
  )
}

export default Hero