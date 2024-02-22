import React from 'react'

const ProductsCard = ({cartItems}) => {
  return (
    <div>
      <h3>Products cards</h3>
      <ul>
        {
           cartItems?.map((item)=>{
            return(
                <li>{item.title}</li>
            )
           }) 

        }
      </ul>
    </div>
  )
}

export default ProductsCard
