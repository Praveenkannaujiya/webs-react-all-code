import React from 'react'
import DIgiclock from './DIgiclock'
import Form from './Form'
import HideshowToggle from './HideshowToggle'
import Alldata from './Alldata'
import Formvalidation from './Formvalidation'
import FunctionProps from './FunctionProps'
import TodoList from './Todolist'
const AllComponentApp = () => {
  const Funprops=()=>{
    alert("hello Deny Bhai")
  }
  return (
    <div>
        <h1>All Componenet App</h1>

        <DIgiclock/>
        <Form/>
        <HideshowToggle/>
        <Alldata/>
        <Formvalidation/>
        <FunctionProps data={Funprops}/>
        <TodoList/>
    </div>
  )
}

export default AllComponentApp