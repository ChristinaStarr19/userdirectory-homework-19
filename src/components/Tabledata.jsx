import React from "react";


const Tabledata = (props) => {
  console.log("tabledate:", props);
  return (
    <tr key={props.person.login.uuid}>
      <td className="w-25">
        <img
          src={props.person.picture.thumbnail}
          className="img-fluid img-thumbnail"
          alt="Sheep"
        />
      </td>
      <td>{props.person.name.first}</td>
      <td>{props.person.name.last}</td>
      <td>{props.person.email}</td>
      <td>{props.person.location.street.number} {props.person.location.street.name}</td>
      <td>{props.person.phone}</td>
    </tr>
  );
};

export default Tabledata;
