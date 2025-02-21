import { useState } from 'react'


import './App.css'
import { useNavigate } from 'react-router-dom';
import { set } from 'mongoose';

function App() {

  const [bor, setBor] = useState("2px solid white")

  const navigate = useNavigate();

  


// for button redirect page on amazon login

  const redirectToWebsite = () => {
    window.location.href = "https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fgp%2Fcss%2Fhomepage.html%3Fref_%3Dnav_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0"; // Change this URL
  };




  // function showSidebar() {
  //   const sidebar = document.querySelector('.sidebar')
  //   sidebar.style.display = 'flex'
  // }
  // function hideSidebar() {
  //   const sidebar = document.querySelector('.sidebar')
  //   sidebar.style.display = 'none'
  // }


  return (
    <>



      <div class="search-container">
        <div class="search-box">
          <i class="material-icons search-icon">search</i>
          <input type="text" placeholder="Search or ask a question..." />
          <i class="material-icons action-icon">camera_alt</i>
          <i class="material-icons action-icon">mic</i>
        </div>
        <a href="#"><i class="material-icons qr-icon">qr_code_scanner</i> </a>
      </div>





      <div class="container">


        <div class="order-section">
          <h2>Arriving tomorrow</h2>
          <a href="https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fgp%2Fcss%2Fhomepage.html%3Fref_%3Dnav_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0"
            class="view-orders">See all orders</a>
        </div>







        <div class="product-info1">
          <img src="./img/i11-1.jpg" alt="Product Image" />
        </div>
      </div>





      <div class="separator"></div>



      <div class="container">


        <div class="order-status">
          <h3>Ordered</h3>
          <p>Your item has been ordered and will be shipped soon.</p>
        </div>





        <div class="progress-bar">
          <progress id="file" value="10" max="100"> </progress>
          <div class="step">
            <div class="circle checked">
              ✔
            </div>
            <div class="step-text active-step">Ordered</div>
          </div>
          <div class="step">
            <div class="circle">
              ✔
            </div>
            <div class="step-text">Shipped</div>
          </div>
          <div class="step">
            <div class="circle">
              ✔
            </div>
            <div class="step-text">Out for delivery</div>
          </div>
          <div class="step">
            <div class="circle">
              ✔
            </div>
            <div class="step-text">Delivered</div>
          </div>
        </div>
      </div>


      <div class="button-container">
        <button class="custom-button" onClick={redirectToWebsite}>Update delivery <br /> instructions</button>
        <button class="custom-button" onClick={redirectToWebsite}>Buy again</button>
        <button class="custom-button" onClick={redirectToWebsite}> Cancel order</button>
      </div>





      <div class="separator-bold"></div>






      <div class="container">




        <div class="shipping-info">
          <h3>Shipped with Amazon</h3>
          <p className='tracking-id'>Tracking ID: 346972924020</p>
          <a href="Order-Details" class="view-orders">See all updates</a>

        </div>




      </div>




      <div class="separator-bold"></div>




      <div class="container">




        <div class="shipping-info">
          <h3>Shipping Address</h3>
          <p>Saif Siddiqui</p>
          <p>C-2183/5</p>
          <p>Indira Nagar, Lucknow</p>
          <p>LUCKNOW, UTTAR PRADESH 226016</p>
        </div>




      </div>


      <div class="separator-bold"></div>



      <div class="container">


        <div class="order-info">
          <h3>Order Info</h3>

          <div class="separator-thin"></div>
          <a href="Order-Details" class="order-details">
            <p>View order details </p>  <span class="material-icons arrow-icon">chevron_right</span>



          </a>

          <div class="separator-thin"></div>
        </div>
      </div>
      <div class="separator-bold bold2"></div>



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
          {/* <i class="material-icons">chat</i>  */}
          <span class="material-symbols-outlined">
            chat
          </span>
          <span>Rufus</span>
        </a>
      </nav>


    </>
  )
}
export default App
