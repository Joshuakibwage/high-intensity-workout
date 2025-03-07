import Banner from "../components/Banner"

import Button from "../components/Button"
import PricingCard from "../components/PricingCard"

const Pricing = () => {
  return (
    <section>
      <Banner 
        label="PRICING"
      />

      <PricingCard />

      <div className="relative">
        <img 
          src="src/assets/pricing-image.jpg" 
          alt="background image" 
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center space-y-4">
          <h2 className="font-extrabold text-2xl md:text-5xl font-inter text-gray-300 sm:text-4xl px-6 md:px-0 text-center">
            BECOME A HIGH INTENSITY MEMBER
          </h2>
          <p className="w-3/4 text-center text-sm text-gray-300">
            Take your fitness journey to the next level with High Intensity the ultimate gym experience 
            designed for those who are ready to push their limits and achieve peak performance. As a High 
            Intensity Member, you’ll gain access to elite training programs, state-of-the-art equipment, 
            expert coaching, and a supportive community that keeps you motivated.  
          </p>
          <Button 
            label="Become A Member"
            className="px-12 py-2 rounded-full bg-primary hover:bg-primary/70 cursor-pointer mt-6"
          />
        </div>
      </div>
    </section>
  )
}

export default Pricing