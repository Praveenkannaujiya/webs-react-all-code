import React from 'react'
import { Table } from 'react-bootstrap'
const NestedArrayMap = () => {
    const userdata = [
        {
            user: 'deny', email: 'praveen@kajal', skill: [
                { react: 'this year', expert: '3 year' },
                { react: 'this year', expert: '3 year' },
                { react: 'this year', expert: '3 year' }
            ]

        },


        {
            user: 'kajal', email: 'kajal@deny', skill: [
                { react: '2021', expert: '3 year' },
                { react: '21', expert: '3 year' },
                { react: '2222 year', expert: '3 year' }
            ]
        }
    ]
    return (
        <div>
            <h1>NestedArrayMap</h1>
            <Table variant='dark'>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>Eamil</td>
                        <td>Skill</td>
                    </tr>
               
                {
                    userdata.map((item) =>
                        <tr>
                            <td>{item.user}</td>
                            <td>{item.email}</td>

                            <td>
                            <Table variant='dark'>
                           <tbody> {
                           
                                item.skill.map((data) =>
                                    <tr>
                                        <td>{data.react}</td>
                                        <td>{data.expert}</td>
                                    </tr>
                                ) }
                                </tbody>
                                </Table>
                           </td>
                        </tr>
                    )
                }
                 </tbody>
            </Table>
        </div>
    )
}

export default NestedArrayMap