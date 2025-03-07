 import Banner from "../components/Banner"

const Trainers = () => {
  return (
    <section>
      <Banner
       label="Trainers"
       />

      <div className="container px-4 md:px-0 mx-auto py-8 md:py-14">
        <div className="flex flex-col justify-center items-center">
          <p className="text-center text-xs text-primary tracking-[0.7rem]">
            TRAINER SKILLS
          </p>
          <h2 className="text-4xl font-inter font-bold md:text-6xl text-gray-300">
            WHY CHOOSE US
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Trainers