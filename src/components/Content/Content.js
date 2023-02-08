import React, { useEffect } from 'react'
import './content.css'
import {useDispatch, useSelector} from 'react-redux'
import {setProducts} from '../redux/actions/productActions.js'

const Content = () => {
    const products = useSelector((state)=> state.allProducts.products)
    const dispatch = useDispatch()
    console.log(products)
    const display = products.map((pro)=>{
        const {id,title,image,price,description} = pro
        return(
           <div key={id} className='individual-content'>
            <div className='image-flex'>
            <img className='content-image' src={image} alt="images"/>
            </div>
            <div className='content-details'>
                <p>{title}</p>
                <span>$ {price}</span>
            </div>
           </div>)
    })
    
    const fetchProducts = async () => {
        await fetch(fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=> dispatch(setProducts(json))))
    }
        useEffect(()=>{
            fetchProducts()
        },[])

    return(
        <div className='content-container'>{display}</div>
    )
}

export default Content;