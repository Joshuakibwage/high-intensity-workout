import { FaCheck } from "react-icons/fa";
import Button from "./Button" 

const PricingCard = () => {
  return (
    <div className="container mx-auto py-16 px-8 md:px-0">
    <div className="flex flex-col justify-center items-center space-y-2">
      <p className="text-primary text-xs font-inter tracking-[1.3rem]">Pricing</p>
      <h2 className="font-bold font-inter text-4xl md:text-6xl text-gray-400">
        CHOOSE YOUR PLAN
      </h2>
      <p className="text-gray-400 text-sm">
        Achieve your desired outcomes with our flexible and effective membership options
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 mt-12">
      <div className="flex flex-col justify-center items-center border border-gray-600 py-18 px-12
      rounded-2xl space-y-8">
        <p className="font-inter font-medium text-4xl text-gray-300">Basic Plan</p>
        <div className="py-8">
          <p>$<span className="font-semibold text-gray-300 text-7xl">59</span>99 /Month</p>
        </div>
        <div className="flex items-center gap-2">
          <FaCheck className="text-primary"/>
          <p className="text-gray-300">May indulgence difficulty</p>
        </div>
        <div className="flex items-center gap-2">
          <FaCheck className="text-primary"/>
          <p className="text-gray-300">Am Increasing at contrasted</p>
        </div>
        <div className="flex items-center gap-2">
          <FaCheck className="text-primary"/>
          <p className="text-gray-300">possession for thoroughly remarkable</p>
        </div>
         <Button 
          label="Purchase Now"
          className="px-16 py-2 bg-primary rounded-full hover:bg-primary/80 cursor-pointer"
         />
      </div>
      <div className="flex flex-col justify-center items-center py-18 px-12
      rounded-2xl space-y-8 bg-primary">
        <p className="font-inter font-medium text-4xl text-gray-300">Premium Plan</p>
        <div className="py-8">
          <p>$<span className="font-semibold text-gray-300 text-7xl">299</span>99 /Month</p>
        </div>
        <div className="flex items-center gap-2">
          <FaCheck className="text-primary"/>
          <p className="text-gray-300">May indulgence difficulty</p>
        </div>
        <div className="flex items-center gap-2">
          <FaCheck className="text-primary"/>
          <p className="text-gray-300">Am Increasing at contrasted</p>
        </div>
        <div className="flex items-center gap-2">
          <FaCheck className="text-primary"/>
          <p className="text-gray-300">possession for thoroughly remarkable</p>
        </div>
         <Button 
          label="Purchase Now"
          className="px-16 py-2 bg-white text-primary rounded-full hover:text-black cursor-pointer"
         />
      </div>
      <div className="flex flex-col justify-center items-center border border-gray-600 py-18 px-12
      rounded-2xl space-y-8">
        <p className="font-inter font-medium text-4xl text-gray-300">Pro Plan</p>
        <div className="py-8">
          <p>$<span className="font-semibold text-gray-300 text-7xl">139</span>99 /Month</p>
        </div>
        <div className="flex items-center gap-2">
          <FaCheck className="text-primary"/>
          <p className="text-gray-300">May indulgence difficulty</p>
        </div>
        <div className="flex items-center gap-2">
          <FaCheck className="text-primary"/>
          <p className="text-gray-300">Am Increasing at contrasted</p>
        </div>
        <div className="flex items-center gap-2">
          <FaCheck className="text-primary"/>
          <p className="text-gray-300">possession for thoroughly remarkable</p>
        </div>
         <Button 
          label="Purchase Now"
          className="px-16 py-2 bg-primary rounded-full cursor-pointer hover:bg-primary/80"
         />
      </div>
    </div>
  </div>
  )
}

export default PricingCard