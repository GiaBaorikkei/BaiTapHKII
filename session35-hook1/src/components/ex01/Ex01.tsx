import React, { useState } from 'react'

export default function Ex01() {
    const [name,setName]= useState<string>("Thái Nguyễn Gia Bảo");
  return (
    <h3>Ex01:
        Họ và tên: {name};
    </h3>
  )
}
