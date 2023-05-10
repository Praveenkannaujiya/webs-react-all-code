import React, {useReducer}from 'react'


const initialState = 0;
const reduc=(state,action)=>{
    console.log(state,action)
    if(action.type==="INCREMENT"){
       return state+1
    }
    if(action.type==="DECREMENT"){
       return state-1
    }
    return state


}
const UseReduce = () => {

  const[state,dispatch] =  useReducer(reduc,initialState)

    
  return (
    <div>
        
        <h1> Increment And Decrement With The Help Of useReduce code through</h1>
        <h1>{state}</h1>
        <button  onClick={()=>dispatch({type:'INCREMENT'})}>Increment</button>
        <button  onClick={()=>dispatch({type:'DECREMENT'})}>Decrement</button>
    </div>
  )
}

export default UseReduce