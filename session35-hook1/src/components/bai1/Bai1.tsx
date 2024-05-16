import React, { useState } from 'react'

export default function Bai1() {
    const [name, setName] = useState<string>("Gia Bảo")
  return (
    <div>Bài 1:
    <p>Họ và tên: {name}</p>
    </div>
  )
}
