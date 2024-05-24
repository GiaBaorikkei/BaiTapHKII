import Spinner from 'react-bootstrap/Spinner';

export default function Bai6() {
  return (
    <div>
        Bai6 <br />
        <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
        </Spinner>
    </div>
  )
}
