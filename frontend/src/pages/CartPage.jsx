import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice";

function CartPage() {

  const cartItems = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "40px" }}>
      <h2>Your Cart</h2>

      {cartItems.length === 0 && <p>Cart is empty</p>}

      {cartItems.map((item) => (
        <div key={item.id} style={{ marginBottom: "20px" }}>
          <h4>{item.title}</h4>
          <p>₹{item.price}</p>

          <button onClick={() => dispatch(decreaseQuantity(item.id))}>
            -
          </button>

          <span style={{ margin: "0 10px" }}>{item.quantity}</span>

          <button onClick={() => dispatch(increaseQuantity(item.id))}>
            +
          </button>

          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </button>
        </div>
      ))}

      <h3>Total: ₹{totalPrice}</h3>
    </div>
  );
}

export default CartPage;