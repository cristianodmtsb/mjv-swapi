import { useEffect, useState } from 'react';
import { swapi } from '../../services/swapi';

export function Characters() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    swapi.get('/people/')
      .then(response => setPeople(response.data.results))
      .catch(error => console.error(error))
  })

    return (
      <div>
        {
          people.map(person => <li>{ person.name }</li>)
        }
      </div>
    )
  }