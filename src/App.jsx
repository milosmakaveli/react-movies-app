import { useEffect, useState } from 'react'
import Navigation from './components/Navigation'
import MovieCard from './components/MovieCard'
import { nanoid} from 'nanoid'
import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'




function App() {

  const [movies, setMovies] = useState([]);

  const apiKey = '523777d942a25400a0fec72471b86bbb';
  const baseURL = 'https://api.themoviedb.org/3/movie'

  const fetchData = async () => {
    const url = `${baseURL}/popular?api_key=${apiKey}`;
    const res = await fetch(url);
    const {results} = await res.json();
    setMovies(results)
  }

  useEffect(()=> {
    fetchData();
  },[])

  

  return (
    <>
      <Navigation />
      <Container>
        <Row xs={1} md={3}>
          {movies.map(movie => (
            <Col key={nanoid()} style={{padding:'1rem'}}>
              <MovieCard {...movie} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default App


