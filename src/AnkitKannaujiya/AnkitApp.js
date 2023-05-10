import React from 'react'
import Propsself from './Propsself'
import Inputbox from './inputbox'
import Hideshow from './hideshow'
import Formh from './Formh'
import FormValidation from './FormValidation'
import Props from './Props'
import UseEffectcode from './UseEffect'
import PropsuseEffect from './PropsuseEffect'

import { useState } from 'react'
const AnkitApp = () => {
    const [data , setData]=useState("lovely")
    const mainfun=()=>{
        setData("Praveen Love Kajal")
    }


    const functionprops= ()=>{
    alert("is btn click funtion props ke help se pass hua hai")
   
    }
  return (
    <div>
        <h1>App Ankit Self</h1>

        <Propsself name ={data}/>

        <button onClick={()=>mainfun()}>Change name </button>



        <Inputbox/>
        <Hideshow/>
        <Formh/>
        
        <FormValidation/>
        <Props data={functionprops}/>

        <UseEffectcode/>
        <PropsuseEffect/>
    </div>
  )
}

export default AnkitApp