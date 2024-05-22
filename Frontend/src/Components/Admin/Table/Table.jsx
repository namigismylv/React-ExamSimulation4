import React from 'react'
import TableItem from '../TableItem/TableItem'
import './Table.css'

const Table = ({data}) => {
  return (
    <>
    <div className="table__div">
    <table class="table table-dark" >
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th className='tableTh' scope="col">Image</th>
      <th className='tableTh' scope="col">Title</th>
      <th className='tableTh' scope="col">Description</th>
      <th className='tableTh' scope="col">Author Image</th>
      <th className='tableTh' scope="col">Author</th>
      <th className='tableTh' scope="col">Price</th>
      <th className='tableTh' scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {
      data.map((dataItem,index)=>{
        return(

          <TableItem dataItem={dataItem} key={index}/>
        )
      })
    }
    
  </tbody>
</table>
</div> 
    </>
  )
}

export default Table
