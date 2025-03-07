import heroImage from "../assets/heroImage.jpg"
import { Link } from "react-router-dom";
import Button from "./Button";




const Hero = () => {
  return (
    
    <section className="relative">
         <img 
            src={heroImage} 
            alt="hero image" 
            className="h-[600px] w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center space-y-6">
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-inter font-bold text-gray-300 w-[80%] text-center">
                Transform Your <span className="text-primary">Body</span> Elevate Your Life
            </h1>
            <p className="w-[90%] md:w-[60%] text-center font-inter text-gray-300">
                A data driven fitness experience designed to optimize your performance, track your 
                progress, and keep you motivated every step of the journey
            </p>
            <div className=" text-white grid grid-cols-2 gap-4 md:grid-cols-4">
                    <div className="flex flex-col items-center">
                        <p className="font-semibold text-4xl">8</p>
                        <p className="text-xs">Fit house Club</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="font-semibold text-4xl">1.2k</p>
                        <p className="text-sm">Visitors Monthly</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="font-semibold text-4xl">130+</p>
                        <p className="text-sm">Pro Equipment</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="font-semibold text-4xl">100%</p>
                        <p className="text-sm">Quality</p>
                    </div>
            </div>
            <div className="flex gap-4 md:mt-4 ">

                <Button 
                    label="Start Now"
                    className="bg-primary px-8 py-3 rounded-lg cursor-pointer hover:bg-primary/70"
                />

                <Button 
                    label="Learn More"
                    className="border-1 border-primary rounded-lg px-8 py-3 cursor-pointer hover:bg-primary"
                />
            </div>
            
        </div>
        
    </section>
    
      
  )
}

export default Hero