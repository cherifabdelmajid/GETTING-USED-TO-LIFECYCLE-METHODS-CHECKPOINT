
import React from 'react';

const List = props => (
  <ul>
    {
      props.items.map((item, index, ) => <li style={props.style} key={props.index}>{item}</li>)
      
    }
  </ul>
);

export default List;