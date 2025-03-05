import { useState, useEffect } from "react";
import HorizontalScrollBar from "./HorizontalScrollBar";
import { exerciseOptions, fetchData } from "../utils/fetchData"

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {

    const [search, setSearch] = useState('');
    const [bodyParts, setBodyParts] = useState([])


    useEffect(() => {
       const fetchExercisesData = async() => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)

            setBodyParts(['all', ...bodyPartsData]);
       }

       fetchExercisesData();
    }, [])
    


    
    const handleSearch = async() => {
        if(search) {
            const exerciseData = await fetchData(
                'https://exercisedb.p.rapidapi.com/exercises', exerciseOptions
            );
            const searchedExercises = exerciseData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search)
                || exercise.target.toLowerCase().includes(search)
                || exercise.equipment.toLowerCase().includes(search)
                || exercise.bodyPart.toLowerCase().includes(search)
            )

            setSearch('')
            setExercises(searchedExercises)
        }
    }

  return (
    <section>
        <div className="container mx-auto py-14 flex justify-center items-center">

            <div className="border w-[80%] h-10 rounded-xl pl-4 flex items-center justify-between bg-accent/10
            border-gray-400">
                <input 
                    type="text" 
                    placeholder="Search Exercise"
                    className="w-full h-full outline-none font-inter text-gray-300"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button 
                onClick={handleSearch}
                className="w-ful py-1 bg-primary px-4 rounded-xl cursor-pointer hover:bg-primary/80"
                >
                    Search
                </button>
            </div>
        </div>

        <div className="relative w-full p-4 ">

            <HorizontalScrollBar 
                data={bodyParts}
                bodyParts={bodyPart}
                setBodyParts={setBodyPart}
            />
        </div>
    </section>
  )
}

export default SearchExercises