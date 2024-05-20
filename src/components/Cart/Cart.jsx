import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../Context/UserContext';
import CartQuantityToggle from '../../Helper/CartQuantityToggle';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar'
import "./Cart.css";
import DeleteIcon from '@mui/icons-material/Delete';
import { mockAddress } from '../../data/MockData';
import FormatPrice from '../../Helper/FormatPrice';
const Cart = () => {
  const { user, cartItems, incrementQuantity, decrementQuantity, removeItem, clearCartItems } = useUserContext();
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className='container cart-container'>
        {
          cartItems.length ?
            <>
              <section className='cart-header-section'>
                <img src={user.image} alt="user" />
                <h4>{user.firstName + " " + user.lastName}</h4>
              </section>
              <section className='cart-items-table-container'>
                <table>
                  <thead>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th>Remove</th>
                  </thead>
                  <tbody>
                    {
                      cartItems.map((item) => (
                        <tr key={item.id}>
                          <td className='d-flex align-items-center'>
                            <img src={item.image} alt={item.name} />
                            <div>
                              <p style={{ marginBottom: "0" }}>{item.name}</p>
                              <p style={{ marginBottom: "0", color: "gray", fontSize: "12px" }}>{item.restaurant.name}</p>
                            </div>
                          </td>
                          <td>{<FormatPrice price={item.price} />}</td>
                          <td>
                            <CartQuantityToggle quantity={item.quantity}
                              onIncrement={() => incrementQuantity(item._id)}
                              onDecrement={() => decrementQuantity(item._id)}
                            />
                          </td>
                          <td><FormatPrice price={item.price * item.quantity} /></td>
                          <td><button onClick={() => removeItem(item._id)}><DeleteIcon /></button></td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </section>
              <section className='cart-button-container'>
                <button className='btn' onClick={() => navigate("/search")}>Continue Shopping</button>
                <button className='btn' onClick={() => clearCartItems()}>Clear Cart</button>
              </section>
              <div className='divider'>
                <section className='cart-address-container'>

                </section>
                <section className='cart-bill-container'>

                </section>
              </div>
            </>
            :
            <div style={{ textAlign: 'center' }}>
              <img style={{ display: 'block', margin: 'auto', height: "300px", width: "300px" }}
                src="https://cdni.iconscout.com/illustration/free/thumb/free-empty-cart-4085814-3385483.png?f=webp"
                alt="empty-cart"
              />
              <h1>Your cart is empty</h1>
              <button className='btn' onClick={() => navigate("/search")}>Continue Shopping</button>
            </div>
        }
      </div>
      <Footer />
    </div>
  )
}

export default Cart;