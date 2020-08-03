import React from 'react';
import Tabledata from "./Tabledata"

const Table = () => {
    return (
        <div>
            <table class="table table-bordered table-image">
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
    <Tabledata />
    <Tabledata />
    <Tabledata />
   
   
  </tbody>
</table>
        </div>
    );
};

export default Table;