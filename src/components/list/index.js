import React from "react";
import { list } from "../../const";

const List = () =>
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
