import Button from 'react-bootstrap/Button';

export default function Bai1() {
  return (
    <div>
        Bai1 <br />
        <Button variant="primary">Lưu</Button>{' '}
        <Button variant="secondary">Hủy</Button>{' '}
        <Button variant="success">Thành công</Button>{' '}
        <Button variant="warning">Cảnh báo</Button>{' '}
        <Button variant="danger">Báo lỗi</Button>{' '}
        <Button variant="info">Thông tin</Button>{' '}
        <Button variant="link">Đường dẫn</Button>
    </div>
  )
}
