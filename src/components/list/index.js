import React from "react";

function List({ listOfItems }) {
  return <ul>{listOfItems.map((elem) => elem.name)}</ul>;
}

export default List;
