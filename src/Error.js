import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const {status, statusText} = useRouteError();
  return (
    <div>
      <h1>Oops</h1>
      <p>Something went wrong</p>
      <h2>{status+ ' '+ statusText}</h2>

      <h4><a href='/'>Please click here</a></h4>
    </div>
  )
}

export default Error
