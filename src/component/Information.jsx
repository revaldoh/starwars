import React from 'react';
import { useState } from 'react';
const Information = ({id}) => {
    const [info, SetInfo] = useState([])

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${id}/`)
          .then((response) => response.json())
          .then((data) => setPerson(data))
          .catch((error) => console.log(error));
      }, [id]);

    return (
        <div>
            <div className='items-center justify-center w-full h-full'>
                <h1>{info.name}</h1>
            </div>
        </div>
    );
}

export default Information;
