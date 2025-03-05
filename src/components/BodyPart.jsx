// import gym from  "../assets/gym.svg"


const BodyPart = ({item, setBodyParts, bodyParts}) => {
  return (
    <div className="">
       
        <p className="font-inter text-gray-300 px-2 py-1 border border-gray-700 m-2 rounded-md text-sm 
        cursor-pointer hover:-translate-y-1 hover:bg-primary transition-all delay-200 ease-in-out"
        onClick={() => {
            setBodyParts(item);
            window.scrollTo({top: 1800, left: 100, behavior: 'smooth' })
        }}
        >
            {item}
        </p>
    </div>
  )
}

export default BodyPart