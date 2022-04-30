import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
    
    if(localStorage.getItem("token")){
        return <Outlet />
    } else { 
        return <Navigate to='/' />
    }
};

export default ProtectedRoutes;



// import React from 'react';
// import { Link } from 'react-router-dom';

// const AboutDescription = () => {
//     return (
//         <section className="about_description">
//             <div>
//                 <i className="fa-regular fa-hand"></i>
//                 <h4>Satisfaction Guaranteed</h4>
//                 <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
//                 <Link to="/" className="btn-shop">SHOP NOW</Link>
//             </div>
//             <div>
//                 <i className="fa-solid fa-rocket"></i>
//                 <h4>Fast Shipping</h4>
//                 <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
//                 <Link to="/" className="btn-shop">SHOP NOW</Link>
//             </div>
//             <div>
//                 <i className="fa-solid fa-helmet-safety"></i>
//                 <h4>UV Protection</h4>
//                 <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
//                 <Link to="/" className="btn-shop">SHOP NOW</Link>
//             </div>
//         </section>
//     );
// };
