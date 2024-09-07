import React from 'react';

function List(props) {
  let titleText = `Favorite ${props.type}`;
  if (props.children instanceof Array) {
    titleText += 's';
  }
  return (
// as the prop.children, the List props sends <li> items
// and to display such items we have to use <ul> or <ol> tags
    <div>
      <h1>{titleText}</h1>
      <ul>{props.children}</ul>
    </div>
  );
}

export default List;