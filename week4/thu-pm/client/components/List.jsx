import React from 'react'
import { Link } from 'react-router-dom'


function List({ products }) {
  return (
    <div className='cards' >
      {products.map(({ product, price, id }) => (
        <div className='card' key={id}>
          <div>
            <Link to={`/details/${id}`}>{product}</Link>
          </div>
          <div>
            {'$'}
            {price}
          </div>
        </div>
      ))}
    </div>
  )
}

export default List
