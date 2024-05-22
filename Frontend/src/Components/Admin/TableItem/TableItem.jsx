import axios from 'axios'
import React, { useContext, useState } from 'react'
import MainContext from '../../../Context/Context'
import { useParams } from 'react-router'

const TableItem = ({dataItem}) => {
  const {data,setData}=useContext(MainContext)
  const {id} = useParams()

  return (
    <>
     <tr>
      <th scope="row">{dataItem._id}</th>
      <td><img src={dataItem.image} width="70px" alt="" /></td>
      <td>{dataItem.title}</td>
      <td>{dataItem.desc}</td>
      <td><img src={dataItem.authorImage} style={{borderRadius:"50%"}} alt="" /></td>
      <td>{dataItem.author}</td>
      <td>{dataItem.price}$</td>
      <td><button className='btn btn-danger' onClick={()=>axios.delete(`http://localhost:2000/courses/${dataItem._id}`).then(res=>{
          setData(res.data)
      }
      )}>Delete</button></td>
    </tr> 
    </>
  )
}

export default TableItem
