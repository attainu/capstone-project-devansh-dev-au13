import React from 'react';
import axios from 'axios';
import Product from '../component/Product'
import { useEffect, useState } from 'react';


export default function Homescreens() {

    const [products, setproducts] = useState([]);
    useEffect(() => {
       
    }, [])


    return (
        <div>
            <div className="row justify-content-center">
                {products.length && (products.map(product => {
                    return <div className = 'col-md-3 m-3 card p-2 ' key={product._id}>
                        <Product product={product} />
                    </div>
                }))}
                
            </div>

        </div>
    )
}
