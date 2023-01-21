// Write your JS code here

import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Products = () => {
  const jwtTokenAuth = Cookies.get('jwt_token')
  console.log(jwtTokenAuth)
  return (
    <>
      {jwtTokenAuth === undefined ? (
        <Redirect to="/" />
      ) : (
        <div>
          <Header />
          <div className="product-page">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png "
              className="product-img"
              alt="products"
            />
          </div>
        </div>
      )}
    </>
  )
}

export default Products
