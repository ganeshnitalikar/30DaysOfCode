
import React, { useEffect, useState } from 'react'
import useFetch from './useFetch'

function App() {
  const data = useFetch('https://jsonplaceholder.typicode.com/users')

  return (
    <>
      {data.data != null &&
        data.data.map((item) => {
          return (
            <div key={item.id}>
              <h1>{item.name}</h1>
              <p>{item.email}</p>
              <p>{item.phone}</p>
            </div>
          );
      })
      }
    </>
  );

}

export default App