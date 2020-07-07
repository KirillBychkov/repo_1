import React from "react";

function List({ listOfItems }) {
  return <ul>{listOfItems.map((elem) => <li key={elem.id}>{elem.name}</li>)}</ul>;
}

export default List;
