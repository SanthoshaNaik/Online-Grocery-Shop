import axios from 'axios';
import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom'
import './pagesCSS/ProductDetails.css'
import Swal from 'sweetalert2';

function ProductDetails() {
    const data=useLocation();
    // console.log("data",data)

    const navigate = useNavigate();

   

    // Check if the user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
     const userEmail = localStorage.getItem('usermail'); // Retrieve the email

    const handlePlaceOrder = () => {
        if (!isLoggedIn || !userEmail) {
            // alert('You must be logged in to place an order.');
            Swal.fire({
                         icon: "error",
                         title: "You must be logged-in to place an order.",
                       text: "Try Again",
                                                
                  });
            navigate('/login'); // Redirect to login page
            return;
        }

         // Prepare the order data
         const orderData = {
            ...data.state, // Include product details
            email: userEmail, // Include user's email
        };

        
        axios.post("http://localhost:4000/placeorder",orderData).then(

            (res)=>{console.log(res.data)

                // alert(res.data);
                if(res.data === "Order Placed. Thank You" )
                {
                    Swal.fire({
                                        title: "Order Placed. Thank You",
                                        icon: "success",
                                        draggable: true
                                      });
                }
                if(res.data === "Order is allready placed. Thank You")
                {
                    Swal.fire({
                        icon: "error",
                        title: "Order is allready placed. Thank You",
                      
                                               
                 });
                }

            }).catch((exe)=>{console.log(exe)})

        };


    return (
        <div className='view-detail'>

            <div className="detail-box">
            <p>Product Name: {data.state.title} </p>
            <p>Price: {data.state.price}</p> 
            <img src={data.state.image} alt="" width={250} height={200}  />
            <p><u><b>Category:</b></u> {data.state.category}</p>
            <p>Description: {data.state.description}</p>
            <p>Ratings: {data.state.rating.rate}</p>
            <p>Reviewed By: {data.state.rating.count}</p>
            <button className='order-btn' onClick={handlePlaceOrder


            }>Place Order</button>
           </div>

            <div className="section0002">
                <h1>FRESH-MART</h1>
                {/* <p>ಏನ್ರೀ ಮೀಡಿಯಾ..!</p> */}
                </div>

        
        </div>
    );
}

export default ProductDetails
