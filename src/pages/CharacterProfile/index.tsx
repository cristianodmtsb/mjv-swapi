import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { swapi } from "../../services/swapi";
import { IPerson } from "../Characters/types";
import { IFilm } from "../Films/types";
import { IPlanet } from "../Planets/types";
import { Main } from "./styles";

export function CharacterProfile() {
  const [character, setCharacter] = useState<IPerson>();
  const [homeworld, setHomeworld] = useState<IPlanet>();
  const [films, setFilms] = useState<IFilm[]>([]);
  const { id } = useParams();

  const getResource = async (url: string) => {
    const response = await swapi.get(`${url.substring(21)}`)
    return response.data;
  }

  useEffect(() => {
    if (id) {
        getResource(`https://swapi.dev/api/people/${id}/`)
          .then(newPerson => {
              setCharacter(newPerson);
          })
          .catch(error => console.error(error))      
    }
  }, [id])

  useEffect(() => {
    if (character) {
      getResource(character.homeworld)
        .then(newHomeworld => {
          setHomeworld(newHomeworld);
        })
        .catch(error => console.error(error))
    }
  }, [character])

  useEffect(() => {
    if (character) {
      character.films.map(film => {  
        console.log("FILMS ", films)       
        getResource(film)
          .then(newFilm => {
            setFilms(films => [...films, newFilm]);              
          })
          .catch(error => console.error(error))        
      })
    }
  }, [character])

  return (
    <Main>
        { character ? 
          <ul>
            <li><h2>{character.name}</h2></li>
            <li>Birth year: {character.birth_year}</li>
            <li>Eye color: {character.eye_color}</li>
            <li>Gender: {character.gender}</li>
            <li>Hair color: {character.hair_color}</li>
            <li>Height: {character.height}</li>
            <li>Mass: {character.mass}</li>
            <li>Skin color: {character.skin_color}</li>
            <li>Homeworld: {homeworld?.name}</li>
            <li>Films: {films.map(film => <span>{film.title + " / "}</span>)}
            </li>
          </ul>
        : 'Personagem não encontrado'}
    </Main>      
  )
}