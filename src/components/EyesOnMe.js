import React from 'react'

export default function EyesOnMe() {

    function handleFocus(e) {
        console.log("Good!")
    }

    function handleBlur(e) {
        console.log("Hey! Eyes on me!")
    }

  return (
    <button onFocus={handleFocus} onBlur={handleBlur}>Eyes on me</button>
  )
}
