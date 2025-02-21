
import { useState, useEffect, useRef } from 'react'

import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';




function Detail() {

    // const [value, setValue] = useState()
    // const [count, setCount] = useState()
    // const navigate = useNavigate();

    // const {
    //     register,
    //     handleSubmit,
    //     watch,
    //     formState: { errors, isSubmitting },
    // } = useForm();

    // const delay = (d) => {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve()
    //         }, d * 3000);
    //     })
    // }

    //const onSubmit = async (data) => {
    // await delay(2)
    //let r = await fetch("http://localhost:3000/", { method: "post", body: JSON.stringify(data) })
    //let res = await r.text()
    //console.log(data, res)


    // const onSubmit = async (data) => {
    //     navigate("/adress")
    //     let r = await fetch(import.meta.env.VITE_MONGO, {
    //         method: "POST", headers: {
    //             "Content-Type": "application/json",
    //         }, body: JSON.stringify(data)


    //     })
    //     let res = await r.text()

    //     console.log(data, res)


    // }


    // function showSidebar() {
    //     const sidebar = document.querySelector('.sidebar')
    //     sidebar.style.display = 'flex'
    // }
    // function hideSidebar() {
    //     const sidebar = document.querySelector('.sidebar')
    //     sidebar.style.display = 'none'
    // }









    return (
        <>


            <div class="search-container">
                <a href="Home"> <i class="material-icons back-icon">arrow_back</i> </a>
                <div class="search-box">
                    <i class="material-icons search-icon">search</i>
                    <input type="text" placeholder="Search or ask a question..." />
                    <i class="material-icons action-icon">camera_alt</i>
                    <i class="material-icons action-icon">mic</i>
                </div>

            </div>




            <div class="order-container">
                <h2 class="order-title">View order details</h2>

                <div class="view-order-details">
                    <div class="order-row">
                        <p class="order-label">Order date</p>
                        <p class="order-value">12-Feb-2025</p>
                    </div>
                    <div class="order-row">
                        <p class="order-label">Order #</p>
                        <p class="order-value">171-2194403-2838702</p>
                    </div>
                    <div class="order-row">
                        <p class="order-label">Order total</p>
                        <p class="order-value">Rs. 21,494.00 (1 item)</p>
                    </div>

                    <a href="https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fgp%2Fcss%2Fhomepage.html%3Fref_%3Dnav_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0">
                        <div class="cancel-section">
                            <p class="cancel-text">Cancel items</p>
                            <span class="material-icons arrow-icon">chevron_right</span>
                        </div>
                    </a>
                </div>


            </div>




            <div class="shipment-header">Shipment details</div>
            <div class="shipment-container">



                <div class="status">Not yet dispatched</div>
                <div class="delivery-date">Delivery Estimate: <br /> <b>Saturday, 8 February, 2025</b></div>
                <div class="product-details">
                    <div class="image-section">
                        <img class="product-img" src="./img/i11-1.jpg" alt="OnePlus 13R" />
                    </div>
                    <div class="product-info">
                        <div><strong>OnePlus 13R | Smarter with OnePlus AI 16GB RAM, 512GB Storage Astral</strong></div>
                        {/* <div>16GB RAM, 512GB Storage Astral</div> */}
                        <div>Qty: 1</div>
                        <div>Sold By: Darshita Electronics</div>
                    </div>
                    <div class="price-section">49,998.00</div>
                </div>
            </div>

            <div class="track-shipment-button">
                <div class="separator-thin"></div>
                <a href="/" class="order-details order-detailss">
                    <p>Track shipment </p> <span class="material-icons arrow-icon">chevron_right</span>



                </a>

                <div class="separator-thin"></div>
            </div>




            <div class="container-page2">


                <div class="section-container">
                    <div class="section-title">Payment Information</div>
                    <div class="section">
                        <div class="sub-title">Payment Methods</div>
                        <div class="payment-methods">BHIM UPI</div>

                    </div>
                </div>


                <div class="section-container">
                    <div class="section-title">Shipping Address</div>
                    <div class="section">
                        <div class="address">
                            <div>Saif Siddiqui</div>
                            <div>C-2183/5</div>
                            <div>Indira Nagar, Lucknow</div>
                            <div>LUCKNOW, UTTAR PRADESH 226016</div>
                            <div>India</div>
                        </div>
                    </div>
                </div>


                <div class="section-container">
                    <div class="section-title">Order Summary</div>
                    <div class="section">
                        <div class="order-summary">
                            <div><span>Items:</span> <span>Rs. 42,371.19</span></div>
                            <div><span>Postage & Packing:</span> <span>Rs. 66.95</span></div>
                            <div><span>Total before Tax:</span> <span>Rs. 42,438.14</span></div>
                            <div><span>Tax:</span> <span>Rs. 7,638.86</span></div>
                            <div class="bold"><span>Total:</span> <span>Rs. 50,077.00</span></div>
                            <div><span>Promotion Applied:</span> <span>-Rs. 79.00</span></div>
                            <div class="order-total"><span>Order Total:</span> <span>Rs. 49,998.00</span></div>
                        </div>
                    </div>
                </div>

            </div>


            <nav class="bottom-nav">
                <a href="https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fgp%2Fcss%2Fhomepage.html%3Fref_%3Dnav_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0" class="nav-item " onclick="setActive(this)">
                    {/* <i class="material-icons">home</i> */}
                    <span class="material-symbols-outlined">
                home
                </span>
                    <span>Home</span>
                </a>
                <a href="https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fgp%2Fcss%2Fhomepage.html%3Fref_%3Dnav_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0" class="nav-item active" onclick="setActive(this)">
                    {/* <i class="material-icons">person</i> */}
                    <span class="material-symbols-outlined">
                person
                </span>
                    <span>You</span>
                </a>
                <a href="https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fgp%2Fcss%2Fhomepage.html%3Fref_%3Dnav_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0" class="nav-item" onclick="setActive(this)">
                    {/* <i class="material-icons">layers</i> */}
                    <span class="material-symbols-outlined">
                layers
                </span>
                    <span>More</span>
                </a>
                <a href="https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fgp%2Fcss%2Fhomepage.html%3Fref_%3Dnav_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0" class="nav-item" onclick="setActive(this)">
                    {/* <i class="material-icons">shopping_cart</i> */}
                    <span class="material-symbols-outlined">
                add_shopping_cart
                </span>
                    <span>Cart</span>
                </a>
                <a href="https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fgp%2Fcss%2Fhomepage.html%3Fref_%3Dnav_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0" class="nav-item" onclick="setActive(this)">
                    {/* <i class="material-icons">menu</i> */}
                    <span class="material-symbols-outlined">
                menu
                </span>
                    <span>Menu</span>
                </a>
                <a href="https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fgp%2Fcss%2Fhomepage.html%3Fref_%3Dnav_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0" class="nav-item" onclick="setActive(this)">
                    {/* <i class="material-icons">chat</i> */}
                    <span class="material-symbols-outlined">
                chat
                </span>
                    <span>Rufus</span>
                </a>
            </nav>


        </>
    )
}

export default Detail
