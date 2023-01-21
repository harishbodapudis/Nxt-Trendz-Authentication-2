// Write your JS code here
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Cart = () => {
  const jwtTokenAuth = Cookies.get('jwt_token')
  console.log(jwtTokenAuth)
  return (
    <div>
      {jwtTokenAuth === undefined ? (
        <Redirect to="/" />
      ) : (
        <div>
          <Header />
          <div className="cart-page">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
              alt="cart"
              className="cart-img"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
