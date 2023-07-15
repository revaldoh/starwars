import React, { useState, useEffect } from 'react';
import Information from './Information';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const [people, setPeople] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
      .then((response) => response.json())
      .then((data) => setPeople(data.results))
      .catch((error) => console.log(error));
  }, []);

  // passing detail ke halaman Information
  const handlePersonClick = (person) => {
    navigate(`information/${person}`)
  };
  // search people
  const [searchKey, setSearchKey] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const search = async ()=> {
    try {
      const response = await fetch(`https://swapi.dev/api/people/?search=${searchKey}`);
      const data = await response.json();
      setSearchResults(data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  useEffect(()=>{
    search()
  },[searchKey])

  const getSelectedPersonIndex = (name) => {
    const results = searchKey !== '' ? searchResults : people;
    return results.findIndex((person) => person.name === name);
  };
  
  return (
    <div className='h-screen w-full'>
      <div>
      <div className='flex justify-center items-center py-24'> <input type="text" id='search' className='border border-black rounded-md w-52' onChange={e => setSearchKey(e.target.value)} placeholder='Search'/></div>
          <div className='md:flex-row flex flex-col py-4 px-6'>
            { (searchKey !== ""? searchResults:people).map((person, index) => (
              <div key={index} className='border py-4 px-4 border-black rounded ml-3 w-full columns-xl'>
                <h2>{person.name}</h2>
                <p>Height: {person.height}</p>
                <p>Mass: {person.mass}</p>
                <div className=''>
                  <button
                    className='w-15 h-12 bg-blue-700 rounded text-white'
                    onClick={() => handlePersonClick(index+1)}
                  >
                    View More Info
                  </button>
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default Home;




