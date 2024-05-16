import React from 'react'

export default function Addstd() {
  return (
    <div>
      <h3>Thêm mới sinh viên</h3>
      <label htmlFor="">Mã sinh viên:</label> <br />
      <input type="text" />
      <br />
      <label htmlFor="">Tên sinh viên</label> <br />
      <input type="text" />
      <br />
      <label htmlFor="">Ngày sinh</label> <br />
      <input type="date" />
      <br />
      <label htmlFor="">Email</label>
      <input type="text" />
    </div>
  )
}
