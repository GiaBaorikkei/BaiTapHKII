
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function Bai9() {

  return (
    <div>
        Bai9 <br />
        <Form>
            <h2 style={{textAlign:'center'}}>Đăng ký tài khoản</h2>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Nhập vào email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control type="password" placeholder="Nhập mật khẩu" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Họ và tên</Form.Label>
        <Form.Control placeholder="Ví dụ:Thái Nguyễn Gia Bảo" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Địa chỉ</Form.Label>
        <Form.Control placeholder="Ví dụ: Hà Đông, Hà Nội" />
      </Form.Group>

      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Thành phố</Form.Label>
          <Form.Select defaultValue="Hà Nội">
            <option>Đà Nẵng</option>
            <option>Thái Nguyên</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Quận</Form.Label>
          <Form.Select defaultValue="Hà Đông">
            <option>Thanh Xuân</option>
            <option>Hai Bà Trưng</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
        <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Mã bưu điện</Form.Label>
        <Form.Control placeholder="" />
      </Form.Group>

        </Form.Group>
    
      </Row>
      <Button style={{marginLeft:'800px'}} variant="primary" type="submit">
        Submit
      </Button>
    </Form>

        
    </div>
  )
}
