"use client";

import React from 'react'

const ErrorHandling = ({error, reset}:{error: Error, reset: ()=> void}) => {
  return (
    <div>ErrorHandling

      <div> {error.message}</div>
      <button onClick={reset}> Reset </button>
    </div>
  )
}

export default ErrorHandling