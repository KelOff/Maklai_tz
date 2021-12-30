import React, { useState } from 'react'
import './Calculator.css'

function Calculator () {
  
  const [ handleChangeA, setHandleChangeA ] = useState(0)
  const [ handleChangeB, setHandleChangeB ] = useState(0)
  const [ operation, setOperation ] = useState('+')
  const [ res, setResult ] = useState(0)
  
  const ev1 = (event) => {
    setHandleChangeA(event.target.value)
  }
  const ev2 = (event) => {
    setHandleChangeB(event.target.value)
  }
  let result = null
  switch (operation) {
    case '+':
      result = +handleChangeA +  +handleChangeB
      break
    case '-':
      result = +handleChangeA -  +handleChangeB
      break
    case '/':
      result = +handleChangeA /  +handleChangeB
      break
    case '*':
      result = +handleChangeA *  +handleChangeB
      break
      default: result= null
  }

  const handleSubmit = () => {
    setResult(result)
  }
  const prevDef = event => {
    event.preventDefault();
  }
  return (
    <div className="container"> 
      <form className="calc_form" onSubmit={ prevDef } >
        <label>
          First number: &nbsp;
          <input type="number" onChange={ ev1 }></input>
        </label>
        <h2 className='operation'>{ operation }</h2>
        <label>
          Second number: &nbsp;
          <input type="number" onChange={ ev2 }></input>
        </label>
        <div className="operations">
          <button className="plus" onClick={ () => setOperation('+') }>+</button>
          <button className="minus" onClick={ () => setOperation('-') }>-</button>
          <button className="divide" onClick={ () => setOperation('/') }>/</button>
          <button className="times" onClick={ () => setOperation('*') }>*</button>
        </div>
        <input className="calculate" type="submit" value="Calculate" onClick={ handleSubmit } />
        <h2>Result: {res}</h2>
      </form>
    </div>
  )
}

export default Calculator