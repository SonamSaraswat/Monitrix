import React, { useContext } from 'react'
import './Cart.css'
import {StoreContext} from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom';
const Cart = () => {

  const {cartItems, models, removeFromCart, getTotalCartAmount }=useContext(StoreContext);
  const navigate=useNavigate();
  
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br/>
        <hr/>
        {models.map((item,index)=>{
          if(cartItems[item.id]>0){
            return(
              <div>
              <div className="cart-items-title cart-items-item">
               <img src={item.img} alt=""/>
               <p>{item.title}</p>
               <p>${item.price}</p>
               <p>{cartItems[item.id]}</p>
               <p>${item.price*cartItems[item.id]}</p>
               <p onClick={()=>removeFromCart(item.id)} className='cross'>x</p>
              </div>
              <hr/>
              </div>
            )
          }
        })}
        </div>

        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Total</h2>
              <div>
                <div className="cart-total-details">
                <p>SubTotal</p>
                <p>${getTotalCartAmount()}</p>
                </div>
                <div className="cart-total-details">
                  <p>Delivery Fee</p>
                  <p>{getTotalCartAmount()===0?0:50}</p>
                </div>
                <div className="cart-total-details">
                  <b>Total</b>
                  <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+50}</b>
                </div>
              </div>
              <button onClick={()=>navigate('/order')}>Proceed to Checkout</button>
          </div>
          <div className="cart-promocode">
            <div>
              <p>If you have a referral code, Enter it here</p>
              <div className="cart-promocode-input">
                <input type='text' placeholder='referral code'></input>
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Cart