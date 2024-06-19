import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export default function Listbook() {
  return (
    <div>
        <div>
        <h2>Quản lí mượn trả sách</h2>
        <Button as="input" type="submit" value="Thêm thông tin" />{' '}
        </div>
        <Table responsive="sm">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên sách</th>
            <th>Sinh viên mượn</th>
            <th>Ngày mượn</th>
            <th>Ngày trả</th>
            <th>Trạng thái</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Harry Potter và Hòn Đá Phù Thủy</td>  
            <td>Nguyễn Văn A</td>
            <td>10/04/2024</td>
            <td>17/04/2024</td>
            <td><Button variant="success">Đã trả</Button>{' '}</td>
            <td>
            <Button variant="outline-warning">Sửa</Button>{' '}
            <Button variant="outline-danger">Xóa</Button>{' '}
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Đắc Nhân Tâm</td>
            <td>Trần Thị B</td>
            <td>05/04/2024</td>
            <td>12/04/2024</td>
            <td><Button variant="success">Đã trả</Button>{' '}</td>
            <td>
            <Button variant="outline-warning">Sửa</Button>{' '}
            <Button variant="outline-danger">Xóa</Button>{' '}
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>1984</td>
            <td>Lê Văn C</td>
            <td>02/04/2024</td>
            <td>09/04/2024</td>
            <td><Button variant="success">Đã trả</Button>{' '}</td>
            <td>
            <Button variant="outline-warning">Sửa</Button>{' '}
            <Button variant="outline-danger">Xóa</Button>{' '}
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Tiền Không Mua Được Hạnh Phúc</td>
            <td>Phạm Thị D</td>
            <td>20/03/2024</td>
            <td>27/03/2024</td>
            <td><Button variant="success">Đã trả</Button>{' '}</td>
            <td>
            <Button variant="outline-warning">Sửa</Button>{' '}
            <Button variant="outline-danger">Xóa</Button>{' '}
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>Người Mẹ Tốt Hơn Là Người Thầy Tốt</td>
            <td>Võ Văn E</td>
            <td>15/03/2024</td>
            <td>22/03/2024</td>
            <td><Button variant="success">Đã trả</Button>{' '}</td>
            <td>
            <Button variant="outline-warning">Sửa</Button>{' '}
            <Button variant="outline-danger">Xóa</Button>{' '}
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>Nghìn Lẻ Một Đêm</td>
            <td>Trần Văn F</td>
            <td>10/03/2024</td>
            <td>17/03/2024</td>
            <td><Button variant="success">Đã trả</Button>{' '}</td>
            <td>
            <Button variant="outline-warning">Sửa</Button>{' '}
            <Button variant="outline-danger">Xóa</Button>{' '}
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>Bắt Trẻ Đồng Xanh</td>
            <td>Phan Thị G</td>
            <td>05/03/2024</td>
            <td>12/03/2024</td>
            <td><Button variant="success">Đã trả</Button>{' '}</td>
            <td>
            <Button variant="outline-warning">Sửa</Button>{' '}
            <Button variant="outline-danger">Xóa</Button>{' '}
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>Cô Bé Mất Tích</td>
            <td>Lý Thị H</td>
            <td>01/03/2024</td>
            <td>08/03/2024</td>
            <td><Button variant="success">Đã trả</Button>{' '}</td>
            <td>
            <Button variant="outline-warning">Sửa</Button>{' '}
            <Button variant="outline-danger">Xóa</Button>{' '}
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>Bí Mật Của Một Trí Nhớ Siêu Phàm</td>
            <td>Trần Thị K</td>
            <td>25/02/2024</td>
            <td>03/03/2024</td>
            <td><Button variant="success">Đã trả</Button>{' '}</td>
            <td>
            <Button variant="outline-warning">Sửa</Button>{' '}
            <Button variant="outline-danger">Xóa</Button>{' '}
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>Chuyến Tàu Định Mệnh</td>
            <td>Lê Văn L</td>
            <td>15/02/2024</td>
            <td>22/02/2024</td>
            <td><Button variant="success">Đã trả</Button>{' '}</td>
            <td>
            <Button variant="outline-warning">Sửa</Button>{' '}
            <Button variant="outline-danger">Xóa</Button>{' '}
            </td>
          </tr>
        </tbody>
      </Table>

    </div>
  )
}
