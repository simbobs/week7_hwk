import React, {useState, useEffect} from 'react';
import Heading from '../components/Heading';


const HogwartsContainer = () => {
  
    const [characters, setCharacters] = useState([]);

    useState = () => {
      
        fetch('http://hp-api.herokuapp.com/api/characters')
        .then(res => res.json())
        .then(characters => (setCharacters(characters)))
    }



    return(
        <>
            <Heading title="I am the title" />
            <h3> I am the container </h3>
        </>
    )

}

export default HogwartsContainer;