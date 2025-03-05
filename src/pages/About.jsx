import Banner from "../components/Banner" 
import { GrYoga } from "react-icons/gr";
import { IoFitness } from "react-icons/io5";
import { FaSprayCanSparkles } from "react-icons/fa6";
import { GiWeightLiftingUp } from "react-icons/gi";


const fitnessActivities = [
  {
      id: 1,
      title: "Yoga Sessions",
      icon: <GrYoga size={60} className="text-primary" />,
      description: "Yoga is a mind-body practice that enhances flexibility, strength, and relaxation through controlled movements and breathwork."
  },
  {
      id: 2,
      title: "Healthy Corner",
      icon: <IoFitness size={60} className="text-primary" />,
      description: "Cardio workouts are essential for heart health, fat burning, and stamina. Use high intensity to maximize fat loss."
  },
  {
      id: 3,
      title: "Spa Center",
      icon: <FaSprayCanSparkles size={60} className="text-primary" />,
      description: "Swimming is a low-impact, full-body workout that enhances strength, endurance, and cardiovascular health while being gentle on the joints."
  },
  {
      id: 4,
      title: "Weight Lifting",
      icon: <GiWeightLiftingUp size={60} className="text-primary" />,
      description: "Weight lifting is a powerful way to build muscle, increase strength, and boost metabolism. Improves posture and strengthens core muscles"
  }

]

const About = () => {
  return (
    <section className="">
      <Banner />
      <div className="container mx-auto">
          <div className="px-4 md:px-0">
            <p className="text-sm tracking-[0.4rem] text-gray-400">HIGH INTENSITY CLUB</p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-300 mt-2 font-inter">
              TAKE CHARGE OF YOUR LIFE
            </h2>
            <p className="max-w-md md:max-w-2xl font-inter text-gray-400 leading-normal mt-4 ">
              Your fitness journey starts with a single decision to take control of your health, strength, 
              and well being. Whether you’re aiming to build muscle, improve endurance, or simply lead a 
              healthier lifestyle, every step you take brings you closer to your goals. With the right 
              workouts, expert guidance, and a supportive community, you have everything you need to push 
              past your limits and unlock your full potential. Commit to yourself, stay consistent, and 
              transform your body and mind because a stronger, healthier you starts today.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2">
            <div className="max-w-xl grid grid-cols-2 gap-12 px-3 md:px-0">
               {
                fitnessActivities.map(({id, description, title, icon}) => (
                  <div key={id} className="border border-gray-600 rounded-lg p-4 bg-gray-800/20 space-y-4
                  hover:-translate-y-1 transition-all delay-200 ease-in-out">
                    <p>
                      {icon}
                    </p>
                    <h3 className="font-semibold text-gray-300">{title}</h3>
                    <p className="text-sm text-gray-400">{description}</p>
                  </div>
                ))
               }
            </div>
            <div className="w-full md:w-3/4">
              <img 
                src="src/assets/aboutSection.jpg" 
                alt="" />
            </div>
          </div>
           
      </div>
    </section>
  )
}

export default About