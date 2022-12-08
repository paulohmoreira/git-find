import React from 'react';

import './styles.css';

function ItemList({ url, title, description }) {
  return (
    <div className="item-list">
      <a href={url} target="_blank">
        <strong>{title}</strong>
        <p>{description}</p>
      </a>
      <hr />
    </div>
  );
}

export default ItemList;
