import React from 'react'


type Props = {}

export default function PageNotFound({}: Props) {
  return (
    <div className='flex justify-center items-center flex-col h-screen'>
       
      <img src="https://wallpapers-clan.com/wp-content/uploads/2022/09/madara-pfp-20.jpg" alt="Error Bro" width={200} className="border border-black border-2 m-4" />

      <h1 className='text-red-600 text-xl m-4'>เพจนี้ไม่มีครับพี่ชายยยย</h1>
      <h1 className='text-red-600 text-xl m-4'>Please doesn't skibidi toilet with me</h1>

    </div>
  )
}