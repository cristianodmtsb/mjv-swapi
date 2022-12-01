import { useEffect, useState } from 'react';
import { Card } from '../../components/Card';
import { swapi } from '../../services/swapi';
import { List } from '../../styles/List';

interface IPerson {
  birth_year: string;
  eye_color: string;
  films: string[]
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  created: string;
  edited: string;
  species: string[]
  starships: string[]
  url: string;
  vehicles: string[]
}

export function Characters() {
  const [people, setPeople] = useState<IPerson[]>([]);

  useEffect(() => {
    swapi.get('/people/')
      .then(response => setPeople(response.data.results))
      .catch(error => console.error(error))
  })

    return (
      <List>
          {
            people.map(person => 
              <Card title={person.name}>
                <li>Birth year: {person.birth_year}</li>
                <li>Eye color: {person.eye_color}</li>
                <li>Gender: {person.gender}</li>
                <li>Hair color: {person.hair_color}</li>
                <li>Height: {person.height}</li>
                <li>Mass: {person.mass}</li>
                <li>Skin color: {person.skin_color}</li>
              </Card>
            )
          }
      </List>
    )
  }