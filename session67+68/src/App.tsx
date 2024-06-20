import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Book } from './interface';
import { useDispatch, useSelector } from 'react-redux';
import { actionBook } from './action';
export default function App() {
  // const [date, setDate] = useState<string>("");
  const [minDate, setMinDate] = useState<string>("");
  const [newMinDate, setNewMinDate] = useState<string>('');
  // const [books, setBooks] = useState<Book[]>([]);
  useEffect(() => {
    let newDate = new Date().toISOString().split("T")[0];
    setMinDate(newDate)

  }, []);
  const stateBook = useSelector((state: any) => {
    return state.bookReducer
  });
  const dispatch= useDispatch();
  console.log("stateBook", stateBook);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let dateValue = event.target.value;
    console.log("giá trị date khi chọn", dateValue);
    setNewMinDate(dateValue);
  }
  // dùng useSelector đẩy lấy các cuốn sách ra.
  // hàm chọn select]
  const handleChangeSelect=(event:React.ChangeEvent<HTMLSelectElement>)=>{
    let valueSelect= event.target.value;
    // console.log("valueSelect",valueSelect);
    
    dispatch(actionBook("FILTER",valueSelect));
  }
  return (
    <div>App
      <br />
      <label htmlFor="">ngày mượn</label>
      <input type="date"
        onChange={handleChange}
        min={minDate}
      /> <br />
      <label htmlFor="">ngày trả</label>
      <input type="date"
        onChange={handleChange}
        min={newMinDate}
      />
      <select name="" id="" onChange={handleChangeSelect}>
        <option value="">lọc theo</option>
        <option value="true">đã trả</option>
        <option value="false">chưa trả</option>
      </select>
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
        {stateBook.map((item:Book,index:number) => {
            return (
              <tr key={item.id}>
                <td>{index+1}</td>
                <td>{item.name}</td>
                <td>{item.student}</td>
                <td></td>
                <td></td>
                <td>{item.status==="true"? <Button variant="primary">Đã trả</Button>:<Button variant="danger">Chưa trả</Button>}</td>
                <td>
                 <Button variant="outline-warning">Sửa</Button>{' '}
                 <Button variant="outline-danger">Xóa</Button>{' '}
               </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}