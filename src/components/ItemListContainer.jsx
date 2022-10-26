import React from 'react';

export default function ItemListContainer({ greeting }) {
  return (
    <>
      <div className="greeting">
        <h2>{greeting}</h2>
      </div>
    </>
  );
}
