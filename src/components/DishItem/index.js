import './index.css'

const DishItem = props => {
  const {dishDetails, cartItems, addItemToCart, removeItemFromCart} = props

  const {
    dishName,
    dishCurrency,
    dishPrice,
    dishDescription,
    dishAvailability,
    dishCalories,
    dishImage,
    dishType,
    addonCat,
    dishId,
  } = dishDetails

  const onIncreaseQuantity = () => addItemToCart(dishDetails)
  const onDecreaseQuantity = () => removeItemFromCart(dishDetails)

  const getQuantity = () => {
    const cartItem = cartItems.find(item => item.dishId === dishId)
    return cartItem ? cartItem.quantity : 0
  }

  const renderControllButton = () => (
    <div className="green-btn-container">
      <button type="button" className="green-btn" onClick={onDecreaseQuantity}>
        -
      </button>
      <p className="num">{getQuantity()}</p>
      <button type="button" className="green-btn" onClick={onIncreaseQuantity}>
        +
      </button>
    </div>
  )

  return (
    <li className="dish">
      <div className="dish-container">
        <div className="icon-text">
          <p>Icon</p>
          <div className="heading-text">
            <h1>{dishName}</h1>
            <p>
              {dishCurrency} {dishPrice}
            </p>
            <p>{dishDescription}</p>
            {dishAvailability && renderControllButton()}
            {!dishAvailability && (
              <p className="not-available">Not Available</p>
            )}
            {addonCat.length !== 0 && (
              <p className="customization">Customizations Available</p>
            )}
          </div>
        </div>
        <p className="calories">{dishCalories} calories</p>
        <img className="dish-img" src={dishImage} alt={dishName} />
      </div>
    </li>
  )
}

export default DishItem
