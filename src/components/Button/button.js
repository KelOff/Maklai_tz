import React from 'react'
import './Button.css'

function Button ({ enabled, setEnabled }) {
  function calc () {
    setEnabled(!enabled)
  }
  return (
    <button className="open_calc" onClick={ calc }> Calculator </button>
    )
}

export default Button