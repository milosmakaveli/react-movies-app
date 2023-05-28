import { Card } from "react-bootstrap";

export default function MovieCard({
  title,
  overview,
  poster_path,
  release_date,
  id,
}) {
  const imageURL = "https://image.tmdb.org/t/p/";
  return (
    <Card key={id}>
      <Card.Img src={imageURL + "w500" + poster_path} alt="Movie img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{overview}</Card.Text>
        <Card.Footer>
          <small className="text-muted">{release_date}</small>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}
