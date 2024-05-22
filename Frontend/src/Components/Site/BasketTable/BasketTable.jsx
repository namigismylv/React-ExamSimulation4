import React from "react";
import BasketTableItem from "../BasketTableItem/BasketTableItem";
import './BasketTable.css'
const BasketTable = ({basketItems}) => {
  return (
    <div className="basketTable">
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th className="tableTh" scope="col">
              Image
            </th>
            <th className="tableTh" scope="col">
              Title
            </th>
            <th className="tableTh" scope="col">
              Description
            </th>
            <th className="tableTh" scope="col">
              Price
            </th>
            <th className="tableTh" scope="col">
              Count
            </th>
            <th className="tableTh" scope="col">
              Add
            </th>
            <th className="tableTh" scope="col">
              TotalPrice
            </th>
            <th className="tableTh" scope="col">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {
            basketItems.map((basketItem,index)=>{
              return(

                <BasketTableItem basketItem={basketItem} key={index} index={index}/>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default BasketTable;
