import React from "react";

const List = ({ list }) =>
  <ul>
    {
      list.map(
        (elem) =>
          <li key={elem.id}>
            {elem.name}
          </li>
      )
    }
  </ul>;

export default List;
