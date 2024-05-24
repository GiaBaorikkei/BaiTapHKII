import Toast from 'react-bootstrap/Toast';

export default function Bai7() {
  return (
    <div>
        Bai7 <br />
        <Toast>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Cảnh bảo!</strong>
      </Toast.Header>
      <Toast.Body>Lỗi kết nối máy chủ</Toast.Body>
    </Toast>
    </div>
  )
}
