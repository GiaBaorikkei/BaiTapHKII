import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

export default function Bai5() {
    const [show, setShow] = useState(true);
    if (show) {
  return (
    <div>
        Bai5 <br />
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Thêm Tài Khoản Thành Công</Alert.Heading>
        {/* <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p> */}
      </Alert>
    </div>
  )
}
return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}
