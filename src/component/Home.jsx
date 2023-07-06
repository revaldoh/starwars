import React from 'react'
import { useState,useEffect } from 'react'


const Home = () => {
  const [people,setPeople] = useState([]);

useEffect(()=>{
  fetch('https://swapi.dev/api/people/')
  .then((response) => response.json())
  .then((json) => setPeople(json.results));
},[])
  return (
    <div className='h-screen w-full'>
        <div>
         {people.length > 0 ? (
            <div className='md:flex-row flex flex-col py-36 px-6'> 
              {people.map((person, index) => (
                <div key={index} className='border py-4 px-4 border-black rounded ml-3' >
                  <h2>{person.name}</h2>
                  <p>Height: {person.height}</p>
                  <p>Mass: {person.mass}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>Loading...</p>
          )}
            
        </div>
       
    </div>
  )
}

export default Home