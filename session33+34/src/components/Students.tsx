import React from 'react'
import "./Students.css"

export default function Students() {
  return (
    <div>
        <div className="hearder-top">
            <h3>Quản lí sinh viên</h3>
            <button id='addstd'>Thêm mới sinh viên</button>
        </div>
        <div className='header-last'>
            <select name="" id="">
                <option value="">Sắp xếp theo tuổi</option>
                <option value=""></option>
            </select>
            <input type="search" />         
        </div>
        <table border={1}>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Mã sinh viên</th>
                    <th>Ngày sinh</th>
                    <th>Email</th>
                    <th>Trạng thái</th>
                    <th>Chức năng</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Nguyễn Văn A</td>
                    <td>21/12/2023</td>
                    <td>nva@gmail.com</td>
                    <td><button>Đang hoạt động</button></td>
                    <td>
                        <button>Chặn</button>
                        <button>Sửa</button>
                        <button>Xoá</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
