import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../components/Card';
import { swapi } from '../../services/swapi';
import { Button } from '../../styles/Button';
import { List } from '../../styles/List';
import { IFilm } from './types';

export function Films() {
  const [films, setFilms] = useState<IFilm[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLastPage, setIsLastPage] = useState(false);

  useEffect(() => {
    swapi.get('/films/', {
      params: {
        page: page
      }
    })
      .then(response => {
        setFilms(response.data.results);
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
            films.map(film => 
              <Card title={film.title} key={film.title}>
                <li>Director: {film.director}</li>
                <li>Producer: {film.producer}</li>
                <li>Episode number: {film.episode_id}</li>
                <li>Release date: {film.release_date}</li>
                <li><Link to={`/film-profile${film.url.substring(28)}`}>+Detalhes</Link></li>
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