import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Bai3() {
  return (
    <div>
        Bai3 <br />
        <div style={{display: "flex"}}>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://laptops.vn/uploads/macbook-air-m1_4_1696437269.jpg" />
        <Card.Body>
            <Card.Title>Macbook Air 2018</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Xem chi tiết</Button>
        </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367688034" />
        <Card.Body>
            <Card.Title>Macbook Pro 2019</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Xem chi tiết</Button>
        </Card.Body>
        </Card>
        </div>
    </div>
  )
}
