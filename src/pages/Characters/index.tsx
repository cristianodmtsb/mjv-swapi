import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../components/Card';
import { swapi } from '../../services/swapi';
import { Button } from '../../styles/Button';
import { List } from '../../styles/List';
import { IPerson } from './types';

export function Characters() {
  const [people, setPeople] = useState<IPerson[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    swapi.get('/people/', {
      params: {
        page: page
      }
    })
      .then(response => {
        setPeople(response.data.results);
      })
      .catch(error => console.error(error))
  }, [page])

    return (
      <>
        <List>
          {
            people.map(person => 
              <Card title={person.name} key={person.name}>
                <li>Birth year: {person.birth_year}</li>
                <li>Eye color: {person.eye_color}</li>
                <li>Gender: {person.gender}</li>
                <li>Hair color: {person.hair_color}</li>
                <li>Height: {person.height}</li>
                <li>Mass: {person.mass}</li>
                <li>Skin color: {person.skin_color}</li>
                <li><Link to={`/character-profile${person.url.substring(28)}`}>+Detalhes</Link></li>
              </Card>              
            )
          }
      </List>
      <div className='pagination'>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1 ? true : false} variant='inline'>Anterior</Button>
        <span>[ Página {page} ]</span>
        <Button onClick={() => setPage(page + 1)} variant='inline'>Próxima</Button>
      </div>      
      </>
    )
  }