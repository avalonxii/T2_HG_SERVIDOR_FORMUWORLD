import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CardB() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.elespectador.com/resizer/r9qlhZGGpI_LMhnm8cZnApszjgA=/920x613/filters:quality(60):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/IWAGH4BFVVEWDEC22MN3PC6ARM.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go formu!</Button>
      </Card.Body>
    </Card>
  );
}
