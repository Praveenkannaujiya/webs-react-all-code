import React, {  useState } from 'react'
import Thankyou from './Thankyou'

const Form = () => {

const[Name,setName]=useState('')
const[Email,setEmail]=useState('')
const [Goto, setGoto]= useState(true)
const [Error,setError]= useState({});


 const Submit =()=>
{
    let error={}
    let valid=true;

    if(Name === ""){
        valid=false;
        error["name"]="enter name"
    }
    else if(Name.length < 3){
        valid=false;
        error.name=" Please Enter a valid name "
    }

     if(Email ===""){
        valid = false;
        error["email"]=" Please Enter a valid email";
     }
     setError(error);
     if(valid){
        setGoto(false);
     }

     

}

  return (
    <div className='m-5'>

       {
       Goto ? <div>
        <input type="text" name='name' onChange={(e)=>setName(e.target.value) } value={Name} />
        <p className='text-danger'>{Error.name}</p>

        <input type="text" name='email' onChange={(e)=> setEmail(e.target.value)} value={Email} />
        <p className='text-danger'>{Error["email"]}</p>
        
        <button onClick={Submit}>Submit</button>
        </div>
        : 
        <Thankyou name={Name} goback={(value)=> setGoto(value) }/>
         }

    </div>
  )
}

export default Form