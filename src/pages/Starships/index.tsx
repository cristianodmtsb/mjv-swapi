import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../components/Card';
import { swapi } from '../../services/swapi';
import { Button } from '../../styles/Button';
import { List } from '../../styles/List';
import { IStarship } from './types';

export function Starships() {
  const [starships, setStarships] = useState<IStarship[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLastPage, setIsLastPage] = useState(false);

  useEffect(() => {
    swapi.get('/starships/', {
      params: {
        page: page
      }
    })
      .then(response => {
        setStarships(response.data.results);
        if (response.data.next == null) {
          setIsLastPage(true);
        } else {
          setIsLastPage(false);
        }
      })
      .catch(error => console.error(error))
  }, [page])

    return (
      <>
        <List>
          {
            starships.map(starship => 
              <Card title={starship.name} key={starship.name}>
                <li>Starship class: {starship.starship_class}</li>
                <li>Model: {starship.model}</li>
                <li>Cost in credits: {starship.cost_in_credits}</li>
                <li>Crew: {starship.crew}</li>
                <li>Cago capacity: {starship.cargo_capacity}</li>
                <li><Link to={`/starship-profile${starship.url.substring(28)}`}>+Detalhes</Link></li>
              </Card>              
            )
          }
      </List>
      <div className='pagination'>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1 ? true : false} variant='inline'>Anterior</Button>
        <span>[ Página {page} ]</span>
        <Button onClick={() => setPage(page + 1)} disabled={isLastPage ? true : false} variant='inline'>Próxima</Button>
      </div>      
      </>
    )
  }