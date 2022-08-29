import React from 'react'
import { useParams } from 'react-router-dom'

function Details(props) {
  console.log('details rendered');
  const { id } = useParams()
  const product = props.products.find((product) => product.id.toString() === id)

  return (
    <section className="details">
      <p>
        <b>Product name</b> {product === undefined ? 'N/A' : product.product}
      </p>
      <p>
        <b>Price</b> {product && product.price}
      </p>
      <p>
        <b>Notes</b> {product?.notes}
      </p>
    </section>
  )
}

export default Details
