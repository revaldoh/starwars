import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const Information = () => {
    const [info, setInfo] = useState ([])
    const [film,setFilm] = useState([])
    const {id} = useParams()
    useEffect(() => {
        const fetchCharacter = async () => {
          try {
            const response = await fetch(`https://swapi.dev/api/people/${id}/`);
            const data = await response.json();
            setInfo(data);
            const filmURLs = data.films;
            filmAPI(filmURLs);
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchCharacter();
      }, [id]);
     const filmAPI =  async (filmURL)=>{
        try{
            const filmPromises = filmURL.map((url) => fetch(url).then((response) => response.json()));
            const filmData = await  Promise.all(filmPromises)
            const filmTitle = filmData.map((film)=> film.title)
            setFilm(filmTitle)
        }catch (error){
            console.log();
        }
     }

    return (
        <div>
          
            <div className='flex flex-col py-36 px-6'>
                <h1 className='text-xl font-bold '>{info.name}</h1>
                <h1>Birth Year: {info.birth_year}</h1>
                <h1>Eye Color: {info.eye_color}</h1>
                <h1>Eye Color: {info.eye_color}</h1>
                <h1>Gender: {info.gender}</h1>
                <h1>Hair Color: {info.hair_color}</h1>
                <h1>Height: {info.height}</h1>
                <h1>Mass: {info.mass}</h1>
                <h1>Skin Color: {info.skin_color}</h1>
                {film.map((film,index)=>(

                <h1 key={index}>Film Title : {index +1 } {film}</h1>
                ))}

            </div>
        </div>
    );
}

export default Information;
