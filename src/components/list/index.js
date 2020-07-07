import React from "react";

function List({ listOfItems }) {
  return <ul>{listOfItems.map((elem) => <li>{elem.name}</li>)}</ul>;
}

export default List;
