import Banner from "../components/Banner"
import { useEffect, useState } from "react";



const Blog = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const apiUrl = 'https://storm_trupa-fitnessblogwithimagesandreviews.web.val.run';

    fetch(apiUrl)
    .then(response => {
      if(!response.ok){
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      setData(data);
      setLoading(false)
    })
    .catch(error => {
      setError(error)
      setLoading(false)
    })
  }, [])

  

  if(loading){
    return <div>Loading...</div>
  }
  
  if(error){
    return <div>Error: {error.message}</div>
  }

console.log(data)
  return (
    <section>
      <Banner
        label="Fitness News"
        className=""
      />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 container mx-auto py-8 px-4 md:px-0">
        {
          data.articlesWithReviews && data.articlesWithReviews.length > 0 ? (
            data.articlesWithReviews.map((item) => (
              <div key={item.id} className="border border-gray-800 bg-gray-900/80 p-4 rounded-xl space-y-2">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className=""
                />
                <p className="text-sm mt-2 font-inter font-bold">{item.category}</p>
                <h2 className="text-sm text-gray-400">{item.title}</h2>
                <p className="text-xs text-gray-400">{item.content}</p>
                <p className="text-xs text-gray-400">{item.publishDate}</p>
                <p className="text-sm">Author: <i className="">{item.author}</i></p>
              </div>
            ))
          ) : (
            <p>No data available</p>
          )
        }
      </div>
    </section>
  )
}

export default Blog