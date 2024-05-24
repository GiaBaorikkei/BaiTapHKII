import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export default function Bai10() {
  const person = [
    {
      name: "Nguyễn Văn A",
      birthDate: "01/01/1981",
      gender: "Nam",
      email: "a@gmail.com",
      address: "Hà Nội",
    },
    {
      name: "Trần thị B",
      birthDate: "05/06/2005",
      gender: "Nữ",
      email: "b@gmail.com",
      address: "Thanh Hóa",
    },
    {
      name: "Phạm Văn C",
      birthDate: "03/03/1992",
      gender: "Nam",
      email: "phamvanc@example.com",
      address: "Đà Nẵng",
    },
    {
      name: "Lê Thị D",
      birthDate: "05/06/2005",
      gender: "Nữ",
      email: "lethid@gmail.com",
      address: "Hải Phòng",
    },
    {
      name: "Nguyễn Văn E",
      birthDate: "05/06/2005",
      gender: "Nam",
      email: "nguyenvane@example.com",
      address: "Cần Thơ",
    },
  ];
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>STT</th>
            <th>Họ và tên</th>
            <th>Giới tính</th>
            <th>Ngày sinh</th>
            <th>Email</th>
            <th>Địa chỉ</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {person.map((e, i) => {
            return (
              <tr>
                <td>{i + 1}</td>
                <td>{e.name}</td>
                <td>{e.gender}</td>
                <td>{e.birthDate}</td>
                <td>{e.email}</td>
                <td>{e.address}</td>
                <td>
                  <Button variant="warning">Sửa</Button>{" "}
                  <Button variant="danger">Xóa</Button>{" "}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}