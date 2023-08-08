import React from "react";
import classes from './cart.module.css'
import {useSelector,useDispatch} from 'react-redux'
import {AiOutlineClose} from 'react-icons/ai'
import {useNavigate} from 'react-router-dom'
import {removeProduct} from '../../redux/cartSlice'

const Cart = () => {

    const {products} = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let totalPrice = 0
    products.map((product) => totalPrice += (product.price * product.quantity))

    const handleRemoveProduct = (id) => {
       dispatch(removeProduct({_id:id}))
    }

    const handleOrder = () => {
       if(products.length > 0){
          navigate('/checkout')
       }
    }

    return(
       <div className={classes.container}>
          <div className={classes.wrapper}>
            <div className={classes.left}>
                {products.length > 0 ? products.map((product) => (
                     <div key={product._id} className={classes.product}>
                       <div onClick={() => handleRemoveProduct(product._id)} className={classes.closeBtn}><AiOutlineClose/></div>
                      <img src={`http://localhost:5000/images/${product.image}`} className={classes.img} alt="" />
                      <div className={classes.productData}>
                        <h3 className={classes.title}>{product.title}</h3>
                        <div className={classes.productAndQuantity}>
                          <span className={classes.quantity}>{product.quantity} x </span>
                          <span className={classes.price}><span>$</span> {product.price}</span>
                        </div>
                      </div>
                     </div>
                )): <h1 className={classes.noProducts}>No products in the cart. Go shopping!</h1>}
            </div>
            <div className={classes.right}>
               <div className={classes.totalProductMsg}>Total Products: {products.length}</div>
                 <div className={classes.subtotalCheckoutBtns}>
                   <span className={classes.subtotal}>Subtotal: ${totalPrice}</span>
                   <span onClick={handleOrder} disabled={products.length === 0} className={classes.orderNowBtn}>Order Now</span>
                 </div>
            </div>
          </div>
       </div>
    )
}

export default Cart