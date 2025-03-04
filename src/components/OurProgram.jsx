import ProgramCard from "./ProgramCard"
import { GrYoga } from "react-icons/gr";
import { GiJumpingRope } from "react-icons/gi";
import { FaPersonSwimming } from "react-icons/fa6";
import { GiWeightLiftingUp } from "react-icons/gi";


const fitnessActivities = [
    {
        id: 1,
        title: "Yoga Garden",
        icon: <GrYoga size={60} className="text-primary" />,
        description: "Yoga is a mind-body practice that enhances flexibility, strength, and relaxation through controlled movements and breathwork."
    },
    {
        id: 2,
        title: "Cardio Exercises",
        icon: <GiJumpingRope size={60} className="text-primary" />,
        description: "Cardio workouts are essential for heart health, fat burning, and stamina. Use high intensity to maximize fat loss."
    },
    {
        id: 3,
        title: "Swimming Pool",
        icon: <FaPersonSwimming size={60} className="text-primary" />,
        description: "Swimming is a low-impact, full-body workout that enhances strength, endurance, and cardiovascular health while being gentle on the joints."
    },
    {
        id: 4,
        title: "Weight Lifting",
        icon: <GiWeightLiftingUp size={60} className="text-primary" />,
        description: "Weight lifting is a powerful way to build muscle, increase strength, and boost metabolism. Improves posture and strengthens core muscles"
    }

]


const OurProgram = () => {
  return (
    <section>
        <div className="container mx-auto py-14 space-y-6">
            <div className="border-l-8 border-primary">
                <h1 className="text-sm tracking-[0.5rem] text-primary ml-4">Our Program</h1>
                <p className="text-3xl font-inter font-semibold ml-4 text-gray-300">Build Your Best Body</p>
            </div>
            <div>
                <p className="text-gray-300 md:max-w-3xl font-inter">
                    Discover a variety of expert-designed exercises to help you achieve peak performance, 
                    whether you’re focusing on strength, endurance, or overall fitness.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:mt-8">
               
               {
                fitnessActivities.map(({id, description, title, icon}) => (
                    <ProgramCard
                        key={id}
                        description={description}
                        title={title}
                        icon={icon}
                    />
                ))
               }
                
            </div>
        </div>
    </section>
  )
}

export default OurProgram