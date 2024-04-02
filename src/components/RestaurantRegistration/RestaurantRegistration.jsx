import './RestaurantRegistration.css';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const RestaurantRegistration = () => {

    const handleFormSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <>
            <Navbar />
            <div className="container restaurant-registration-container">
                <form method='POST' onSubmit={handleFormSubmit}>
                    <label htmlFor="name">Restaurant Name</label>
                    <input type="text" name="name" id="name" className="reg-input" placeholder='Enter Restaurant Name' />

                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" id="address" className="reg-input" placeholder='Enter Address' />

                    <label htmlFor="city">City</label>
                    <input type="text" name="city" id="city" className="reg-input" placeholder='Enter City' />

                    <label htmlFor="state">State</label>
                    <input type="text" name="state" id="state" className="reg-input" placeholder='Enter State' />

                    <label htmlFor="pincode">Pincode</label>
                    <input type="text" name="pincode" id="pincode" className="reg-input" placeholder='Enter Pincode' />

                    <label htmlFor="cuisine">Cuisine</label>
                    <input type="text" name="cuisine" id="cuisine" className="reg-input" placeholder='Enter Cuisines' />

                    <label htmlFor="keywords">Keywords</label>
                    <input type="text" name="keywords" id="keywords" className="reg-input" placeholder='Enter Keywords' />

                    <label htmlFor="image">Image</label>
                    <input type="file" name="image" id="image" className="reg-input" />

                    <label htmlFor="phone">Phone</label>
                    <input type="tel" name="phone" id="phone" className="reg-input" placeholder='Enter Phone Number' />

                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" className="reg-input" placeholder='Enter Email' />
                    
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" className="reg-input" placeholder='Enter Password' />


                </form>
            </div>
            <Footer />
        </>
    )
}

export default RestaurantRegistration;