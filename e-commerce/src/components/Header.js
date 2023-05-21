import React from "react";
import { NavLink,Link } from "react-router-dom";
import{BsSearch} from 'react-icons/bs';
const Header =()=>
{
    return(
       <>
       <header className="header-top-strip py-3">
        <div className="container-xxl">
            <div className="row align-items-center">
                <div className="col-6">
                <p className="text-white mb-0" >Free shipping over Ksh 10,000 and free return</p>
                </div>
<div className="col-6"> <p className="text-end text-white mb-0"> Hotline: <a  style={{textDecoration: 'none'}} className="text-white" href="tel:+254741934896">+254741934896</a></p>
</div>

            </div>
        </div>
       </header>
       <header className="header-upper py-3">  
       <div className="container-xxl">
        <div className="row align-items-center" > 
        <div className="col-2">
            <h2>
                <Link style={{textDecoration: 'none'}} className="text-white">Al-medina</Link>
            </h2>
        </div>
        <div className="col-5"> 
        <div className="input-group ">
  <input type="text" className="form-control py-2" placeholder="Search Products.." 
  aria-label="Search Products.." aria-describedby="basic-addon2"/>
  <span class="input-group-text p-3" id="basic-addon2">
    <BsSearch className="fs-6"/>
  </span>
</div>
</div>
        <div className="col-5">
            <div className="header-upper-links d-flex align-items-center justify-content-between">
                 <div><Link to="/compare-product" style={{textDecoration: 'none'}} className="d-flex align-items-center gap-10 text-white">
                <img src="images/compare.png"alt="compare"/>
                <p className="mb-0"> compare<br/> products</p>
                </Link> 
                </div>
                <div> <Link style={{textDecoration: 'none'}} className="d-flex align-items-center gap-10 text-white"><img src="images/favorite.png"alt="favorite"/>
                <p className="mb-0"> Favourite <br/> wishlist</p>
                </Link>
                </div>
               <div> <Link  style={{textDecoration: 'none'}}className="d-flex align-items-center gap-10 text-white"> <img src="images/login.jpeg"alt="login"/>
               <p className="mb-0"> Log in <br/> My account </p>
               </Link></div> 
               <div><Link style={{textDecoration: 'none'}}className="d-flex align-items-center gap-10 text-white">
               <img src=" images/cart.png"alt="cart"/>
            <div className="d-flex flex-column gap-10">
                <span className="badge bg-white text-dark">0</span>
                <p className="mb-0">Ksh 0.00</p>
            </div>
               </Link></div>
    </div>
            </div>

        </div>
        </div>

       </header>
       <header className="header-bottom py-3">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <div className="menu-bottom d-flex align-items-center gap-30">
                        <div> <div class="dropdown">
  <button className="btn btn-secondary dropdown-toggle  bg-transparent border-0 gap-15 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Product Categories
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><Link className="dropdown-item text-white"  to="">Building materials</Link></li>
    <li>< Link className="dropdown-item text-white" to = "" >Electrical supplies</Link></li>
    <li>< Link className="dropdown-item text-white" to ="" >Plumbing</Link></li>
    <li>< Link className="dropdown-item text-white" to ="" >Tools</Link></li>
  </ul>
</div></div>
                        <div className="menu-links">
                            <div className="d-flex align-items-center gap-15 ">
                                <NavLink to = "/">Home</NavLink>
                                <NavLink to ="/store">Our Stores</NavLink>
                                <NavLink to ="/blogs">News&Blogs</NavLink>
                            <NavLink to="/Contact">Contact</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </header>
       </>
    ) 
}
export default Header;