import React from 'react';
import axios from 'axios';
import ProductsCard from './ProductsCard';

const Products = () => {
    var [products, setProducts] = React.useState([]);
    var [cartItems,setCartItems]=React.useState([])
    React.useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((res) => {
            console.log(res.data)
            setProducts([...res.data])
        })

    }, [])
    function addTocart(product){
        if(product.quantity){
            product.quantity=product.quantity++
        }else{
            product.quantity=1;
            setCartItems([...cartItems,{...product}])
        }
    }
    React.useEffect(()=>{
        console.log(cartItems)

    },[cartItems])

    return (
        <div className='d-flex'>
            <div className='main-card'>
                {
                    products.map((product) => {
                        return <div class="card-group item-card">
                            <div class="card" className='cardStyle1 addCard'>
                                <img src={product.image} style={{ width: "200px",height:'200px' }} class="card-img-top" alt="..." />
                                <div class="card-body d-flex flex-column justify-content-between">
                                    <h5 class="card-title">{product.title}</h5>
                                    <p class="card-text"><small class="text-body-secondary">{product.category}</small></p>
                                    <button className='btn btn-success'onClick={()=>{addTocart(product)}}>Add item</button>
                                </div>
                            </div>
                        </div>
                    })


                }
        </div>
        <div className='border border-dark w-40 '>
            <ProductsCard cartItems={cartItems}/>
        </div>
        </div>)

}
export default Products;
