import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../components/Card';
import { swapi } from '../../services/swapi';
import { Button } from '../../styles/Button';
import { List } from '../../styles/List';
import { IPlanet } from './types';

export function Planets() {
  const [planets, setPlanets] = useState<IPlanet[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLastPage, setIsLastPage] = useState(false);

  useEffect(() => {
    swapi.get('/planets/', {
      params: {
        page: page
      }
    })
      .then(response => {
        setPlanets(response.data.results);
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
            planets.map(planet => 
              <Card title={planet.name} key={planet.name}>
                <li>Population: {planet.population}</li>
                <li>Climate: {planet.climate}</li>
                <li>Rotation period: {planet.rotation_period}</li>
                <li>Diameter: {planet.diameter}</li>
                <li>Terrain: {planet.terrain}</li>
                <li><Link to={`/planet-profile${planet.url.substring(28)}`}>+Detalhes</Link></li>
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