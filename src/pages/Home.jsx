import Hero from "../components/Hero" 
import OurProgram from "../components/OurProgram"
import Services from "../components/Services"
import SearchExercises from "../components/SearchExercises"
import { useState } from "react";

const Home = () => {

  const [bodyParts, setBodyParts] = useState('All');
  const [exercises, setExercises] = useState([])

  return (
    <section className="">
      <Hero />
      <SearchExercises 
        setBodyParts={setBodyParts}
        setExercises={setExercises}
        bodyParts={bodyParts}
        exercises={exercises}
      />
      <OurProgram />
      <Services />
    </section>
  )
}

export default Home