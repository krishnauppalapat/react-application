import React from 'react';
import axios from 'axios';


const Products = () => {
    var [products, setProducts] = React.useState([]);
    React.useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((res) => {
            console.log(res.data)
            setProducts([...res.data])
        })

    }, [])

    return (
        <div>
            <h1>Products</h1>
            <div className='main-card'>
            {
                products.map((product)=>{
                    return <div class="card-group item-card addBrd">
                            <div class="card" className='cardStyle1'>
                                <img src={product.image} style={{width:"200px"}}class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{product.title}</h5>
                                    <p class="card-text"><small class="text-body-secondary">{product.category}</small></p>
                                    <button className='btn btn-primary'>Add item</button>
                                </div>
                            </div>
                            </div>
                })
                
                
            }
            </div>
        </div>)

}


export default Products;
