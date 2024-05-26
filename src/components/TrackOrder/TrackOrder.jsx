import { useEffect } from "react";
import { useOrderContext } from "../../Context/OrderContext";
import "./TrackOrder.css";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import FormatPrice from "../../Helper/FormatPrice";
const TrackOrder = () => {

    const { isLoading, fetchOrder, orderDetails } = useOrderContext();
    const params = useParams();

    useEffect(() => {
        fetchOrder(params.orderId);
        // eslint-disable-next-line
    }, [params.orderId])

    return (
        <>
            <Navbar />
            {
                isLoading ? <div className="track-order-page-loader"></div> :
                    <div className='track-order-page-container container'>
                        <div className="track-order-page-left-container">
                            <h2 className="text-center">Order Details</h2>
                            <div className="order-details">
                                <h6>Order Id: #{orderDetails?._id}</h6>
                                <p>Ordered at: {new Date(orderDetails?.createdAt).toLocaleTimeString()}</p>
                                <p>From : {orderDetails?.restaurant?.name}, {orderDetails?.restaurant?.address.slice(0, 70)}</p>
                                <p>To : {orderDetails?.address}</p>
                            </div>
                            <table className="order-items-table">
                                <thead>
                                    <tr>
                                        <th>Item</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        orderDetails?.foodItems?.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td><img src={item.image} alt={item.name} /></td>
                                                    <td>{item.name} X {item.quantity}</td>
                                                    <td>{item.price}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>

                            <h5 className="mt-3">Total Bill: {<FormatPrice price={orderDetails?.totalAmount} />}</h5>
                        </div>
                        <div className="track-order-page-right-container">
                            <h2 className="text-center">Order Status:</h2>
                            <p>{orderDetails?.status}</p>
                        </div>
                    </div>

            }
            <Footer />
        </>
    )
}

export default TrackOrder;