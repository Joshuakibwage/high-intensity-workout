 

const Exercises = ({workOut }) => {
    console.log(workOut)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
       {
        workOut.map((item) => (
             <div key={item.id} className="p-2 border border-gray-500 rounded-md group">
                <div className="">
                    <img 
                        src={item.gifUrl} 
                        alt={item.name} 
                        className="group-hover:scale- transition-all delay-200 ease-in-out w-full"
                    />
                    <h2>{item.bodyPart}</h2>
                    <p>{item.equipment}</p>
                    <p>{item.name}</p>
                    <p>{item.instructions}</p>
                </div>
                
             </div>
        ))
       }
    </div>
  )
}

export default Exercises