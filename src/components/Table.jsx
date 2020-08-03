import React from 'react';
import Tabledata from "./Tabledata"

const Table = (props) => {
  console.log(props.results);
    return (
        <div>
            <table className="table table-bordered table-image">
  <thead>
    <tr>
      
      <th scope="col">Image</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Email</th>
      <th scope="col">Address</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
  <tbody>
    {props.results.map(result => {
      return <Tabledata person={result} key={result.login.uuid}/>
    })}
    
  
   
   
  </tbody>
</table>
        </div>
    );
};

export default Table;