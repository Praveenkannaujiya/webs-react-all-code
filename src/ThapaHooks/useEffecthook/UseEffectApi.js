import React, { useEffect, useState } from 'react'
import Loadingpage from './Loadingpage'
import {FcApproval, FcStart,FcCopyright} from 'react-icons/fc'
const UseEffectApi = () => {
  const [item,setItem]=useState([]);
  const [loading,setLoading]=useState(true)

    const getUsers = async()=>{

        try{
          const resp=  await fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
          setLoading(false)
          
          setItem(await resp.json()) 
        }
        catch(error){
          setLoading(false)
          console.log('This Is API fetch Error can not uplaod data' + error)
        }


    }

  useEffect( ()=>{
    getUsers()
  },[])


  if(loading){
    return <Loadingpage/>
  }

  return (
    <>
        <h1> UseEffect ki hepl se aap API ka data le kr use kre </h1>

       <div className='container-fluid mt-5'>
        <div className='row text-center'>
          {

            item.map((curEle)=>{
                  return(
                    <div className='col-10 col-md-4 mt-5'>
                    <div className='card p-2'>
                      <div className='d-flex align-items-center'>
                        <div className='image' > <img src={curEle.url} className='rounded' width="155" /></div>
                        <div className='ml-3 w-100'>
        
                          <h4 className='mb-0 mt-0 textLeft '> Praveen {curEle.id}<FcCopyright/> <FcApproval/>< FcStart/></h4> <span className='textLeft'>{curEle.title} title</span>
                          <div className='p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats'>
                            <div className='d-flex flex-column'> <span className='articles'>Articles</span> <span className='number1'>35</span> </div>
                            <div className='d-flex flex-column'> <span className='follower'>Follower</span> <span className='number2'>952</span> </div>
                            <div className='d-flex flex-column'> <span className='rating'>Rating</span> <span className='number3'>8.5</span> </div>
        
                          </div>
        
                        </div>
        
                      </div>
        
                    </div>
        
                  </div>
                  )
            })
          }
         

        </div>

       </div>
    </>
  )
}

export default UseEffectApi

//https://jsonplaceholder.typicode.com/albums/1/photos

//  Error handling is 

//  try{
//   const resp=  await fetch('https://jsonplaceholder.typicode.com/albums/1/photos')

//        setItem(await resp.json()) 

//  }
//  catch(error){
//   console.log("this is fetch Type Error" + error)

//  }
