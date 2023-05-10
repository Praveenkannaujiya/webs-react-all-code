import React from 'react'
import {Table} from 'react-bootstrap'

const MapObejet = () => {
    const userdata=[
        {user:'deny', email: 'praveen@kajal'},
    {user:'kajal', email: 'kajal@deny'}
]
  return (
    <div>
      <h1>--------------------------------------------------------------</h1>
      <h1>Map Function</h1>
         <Table striped variant='dark' hover>
          <tbody>
            
         <tr>
            <td>Name</td>
            <td>Email</td>
        </tr>   
      {
       
        userdata.map((item ,index)=>
       <tr key={index}>
        <td>{item.user}</td>
        <td>{item.email}</td>
       </tr>
       
        )
      }
      </tbody>
      </Table>
    </div>
  )
}

export default MapObejet