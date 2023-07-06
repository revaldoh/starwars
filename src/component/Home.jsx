import React, { useState, useEffect } from 'react';
import Information from './Information';

const Home = () => {
  const [people, setPeople] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
      .then((response) => response.json())
      .then((data) => setPeople(data.results))
      .catch((error) => console.log(error));
  }, []);

  const handlePersonClick = (person) => {
    setSelectedId(person.id);
  };

  return (
    <div className='h-screen w-full'>
      <div>
        {selectedId ? (
          <Information id={selectedId} />
        ) : (
          <div className='md:flex-row flex flex-col py-36 px-6'>
            {people.map((person, index) => (
              <div key={index} className='border py-4 px-4 border-black rounded ml-3 w-full columns-xl'>
                <h2>{person.name}</h2>
                <p>Height: {person.height}</p>
                <p>Mass: {person.mass}</p>
                <div className=''>
                  <button
                    className='w-15 h-12 bg-blue-700 rounded text-white'
                    onClick={() => handlePersonClick(person)}
                  >
                    View More Info
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
