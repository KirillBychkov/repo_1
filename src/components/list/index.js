import React from "react";
import './style.sass';

const List = ({ list, setIsDone, deleteItem }) =>
  list.length === 0? <h3>No items</h3> : <ul>
    {
      list.map(
        (elem) =>
          <li key={elem.id} className={elem.done? 'done' : ''} onClick={() => setIsDone(elem.id)}>
            <span className="text">{elem.name}</span>
            <span className={'delete'} onClick={(event) => {
              event.stopPropagation();
              deleteItem(elem.id);
            }}>x</span>
          </li>
      )
    }
  </ul>;

export default List;
