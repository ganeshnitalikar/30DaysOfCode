import React from 'react'

function Input(
    {title, placeholder, type,onChange }
) {
  return (
    <>
    <label  className='block text-sm font-medium text-gray-700 mt-5'>{title}</label>
    <input onChange={
        onChange
    } className='w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-1' type={type}placeholder={placeholder} required  />
    </>
  )
}

export default Input