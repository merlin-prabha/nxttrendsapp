import {HiOutlineShoppingCart} from 'react-icons/hi'
import './index.css'

const Header = props => {
  const {cartItems} = props

  const getCartItemsCount = () =>
    cartItems.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <nav className="nav-header">
      <h1>UNI Resto Cafe</h1>
      <div className="text-carticon-number">
        <p className="cart-text">My Orders</p>
        <div className="cart-number">
          <HiOutlineShoppingCart className="cart-icon" />
          <p className="number">{getCartItemsCount()}</p>
        </div>
      </div>
    </nav>
  )
}

export default Header
