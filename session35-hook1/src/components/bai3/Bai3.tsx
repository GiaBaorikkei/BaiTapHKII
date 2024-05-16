import React, { useState } from 'react'

export default function Bai3() {
    const [color,setColor] = useState<string>('black');
    const changeColor = () => {
        setColor(prevColor=>prevColor==='black'?'red':'black')
    }
  return (
    <div>
        <p style={{color}}>Tiêu đề văn bản</p>
      <button onClick={changeColor}>Thay đổi màu</button>
    </div>
  )
}
